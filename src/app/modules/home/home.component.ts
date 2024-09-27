import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { Subject, takeUntil } from 'rxjs';

export interface Course {
    name: string;
    completed: boolean;
}

type FormType = {
    courses: FormArray<FormGroup<FormCourseType>>;
};

type FormCourseType = {
    name: FormControl<string>;
    completed: FormControl<boolean>;
}

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    standalone: true,
    imports: [
        MatProgressBarModule,
        MatCheckboxModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class HomeComponent implements OnInit, OnDestroy {

    private _unsubscribeAll = new Subject<void>();

    public form = new FormGroup<FormType>({
        courses: new FormArray([])
    });

    public coursesFormArray = this.form.get('courses') as FormArray<FormGroup<FormCourseType>>;

    public courses: Course[] = [
        {
            name: "Matemática Aplicada à Computação",
            completed: true
        },
        {
            name: "Raciocínio Computacional",
            completed: true
        },
        {
            name: "Introdução à Filosofia",
            completed: true
        },
        {
            name: "Fundamentos da Programação Orientada a Objetos",
            completed: true
        },
        {
            name: "Comunicação Aplicada",
            completed: true
        },
        {
            name: "Empreendedorismo e Inovação",
            completed: true
        },
        {
            name: "Banco de Dados para Tecnologia da Informação",
            completed: true
        },
        {
            name: "Fundamentos de Internet das Coisas",
            completed: true
        },
        {
            name: "Ética",
            completed: true
        },
        {
            name: "Fundamentos de Programação Web",
            completed: true
        },
        {
            name: "Métodos de Pesquisa e Ordenação em Estruturas de Dados",
            completed: true
        },
        {
            name: "Teologia e Sociedade",
            completed: true
        },
        {
            name: "Especificação de Sistemas de Informação",
            completed: true
        },
        {
            name: "Gestão de Projetos em Computação",
            completed: true
        },
        {
            name: "Inteligência Analítica em Negócios",
            completed: true
        },
        {
            name: "Fundamentos de Big Data",
            completed: true
        },
        {
            name: "Projeto de Sistemas de Informação",
            completed: true
        },
        {
            name: "Educação, Identidade e Solidariedade",
            completed: true
        },
        {
            name: "Interação Humano Computador",
            completed: true
        },
        {
            name: "Internet das Coisas em um Mundo Conectado",
            completed: true
        },
        {
            name: "Métodos Ágeis em TI",
            completed: true
        },
        {
            name: "Fundamentos Engenharia de Software",
            completed: true
        },
        {
            name: "Segurança da Tecnologia da Informação",
            completed: true
        },
        {
            name: "DevOps",
            completed: false
        },
        {
            name: "Sistemas Web Seguros",
            completed: false
        },
        {
            name: "Tecnologias Para Desenvolvimento Web",
            completed: false
        },
        {
            name: "Cloud Computing",
            completed: false
        },
        {
            name: "Desenvolvimento para dispositivos móveis",
            completed: false
        },
        {
            name: "Gestão de Serviços de Tecnologia da Informação",
            completed: false
        }
    ];

    public completed = 0;

    constructor() { }

    ngOnInit() {

        this._initForm();

        this.form.valueChanges
            .pipe(
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(v => {

                const selected = v.courses.filter(c => c.completed).length;

                this._calcPercentage(selected);
            });

    }

    ngOnDestroy() {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // Public methods
    public checkAll(): void {
        this.coursesFormArray.controls.filter(c => c.get('completed').value == false).map(c => c.get('completed').setValue(true));
    }

    public uncheckAll(): void {
        this.coursesFormArray.controls.filter(c => c.get('completed').value == true).map(c => c.get('completed').setValue(false));
    }

    // Private methods
    public _initForm(): void {

        this.courses.map(c => {
            const group = new FormGroup<FormCourseType>({
                name: new FormControl(c.name),
                completed: new FormControl(c.completed)
            });
            this.coursesFormArray.push(group);
        });

        const selected = this.courses.filter(c => c.completed).length;

        this._calcPercentage(selected);
    }

    private _calcPercentage(selected: number): void {

        const max = this.courses.length;

        const percent = selected * 100 / max;

        this.completed = percent;
    }

}

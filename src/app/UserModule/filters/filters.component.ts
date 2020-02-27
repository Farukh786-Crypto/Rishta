import {Component}from '@angular/core'
@Component({
    selector: 'filters-comp',
    templateUrl: './filters.component.html',
    styleUrls: ['filters.component.css',
                '../user.component.css'],
    //providers: [FeedbackService]
})

export class FiltersComponent {
    title: string = 'Filters Demo Component '
    //feedbackDetails: FormGroup
}
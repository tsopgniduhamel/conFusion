import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { switchMap } from 'rxjs/operators';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from './../shared/comment';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
})
export class DishdetailComponent implements OnInit {
  // @Input()

  @ViewChild('fform') feedbackFormDirective;
  dish: Dish;
  dishIds: string[];
  prev: string;
  next: string;

  // elements for the comment form
  commentForm: FormGroup;

  formErrors = {
    name: '',
    rate: '',
    message: '',
  };

  validationMessages = {
    name: {
      required: 'Name is required',
      minlength: 'Name must be at least 2 characters',
      maxlength: 'Name cannot be more than 25 characters',
    },
    rate: {
      required: 'Rate is required',
    },
    message: {
      required: 'Message is required',
      minlength: 'Message must be at least 2 characters',
    },
  };

  constructor(
    private dishService: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    @Inject('BaseURL') private BaseURL
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.dishService.getDishIds().subscribe((dishIds) => {
      this.dishIds = dishIds;
    });
    //let id = this.route.snapshot.params['id'];
    this.route.params
      .pipe(
        switchMap((params: Params) => this.dishService.getDish(params['id']))
      )
      .subscribe((dish) => {
        this.dish = dish;
        this.setPrevNext(dish.id);
      });
  }

  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[
      (this.dishIds.length + index - 1) % this.dishIds.length
    ];
    this.next = this.dishIds[
      (this.dishIds.length + index + 1) % this.dishIds.length
    ];
  }

  goBack(): void {
    this.location.back();
  }

  //creating the form
  createForm() {
    this.commentForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(25),
        ],
      ],
      rate: [0, [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(2)]],
    });

    this.commentForm.valueChanges.subscribe((data) =>
      this.onValueChanged(data)
    );

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.commentForm) {
      return;
    }
    const form = this.commentForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        //clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + '';
            }
          }
        }
      }
    }
  }

  onSubmit() {
    this.commentForm.reset({
      name: '',
      rate: '',
      message: '',
    });
  }
}

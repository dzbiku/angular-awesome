import { Component } from '@angular/core'
import { ICamera } from './camera';

@Component({
    selector: 'pm-cam',
    templateUrl: './camera.component.html',
    styleUrls: ['./camera.component.css'] //pamietac o nawiasach kwadratowych DUPA DUPA DUPA NIE DZIALA...
})
export class CameraComponent {
    pageTitle: string = "Coding camera in Angular, awesome!";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
}
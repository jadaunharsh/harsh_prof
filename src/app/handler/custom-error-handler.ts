import { ErrorHandler } from "@angular/core";

export class CustomeErrorHandler implements ErrorHandler {
    handleError(error: any): void {
        // throw new Error("Method not implemented.");
        // console.error("An error occurred:", error);
        switch (error.status) {
            case 404:
                console.error("Resource not found (404)\n", error);
                break;
            case 500:
                console.error("Internal server error (500)\n", error);
                break;
            default:
                console.error("An unexpected error occurred\n", error);
        }
    }

}
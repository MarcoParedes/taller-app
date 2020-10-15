import { Category } from "src/app/models/category";

export class Dish {
    public _id: string;
    public name: string;
    public description: string;
    public price: number;
    public image: string;
    public category: Category;
}

export interface People {
  id: number;
  Name: string;
  Age: number;
  Address: string;
}
export interface Data {
  myPeoples: People[];
}
export interface EditmodalProps{
  show:boolean;
  setShow:(show:boolean)=>void;
  handleClose:()=>void;
  id:number;
  people:any;
  handleChange:(field: string, value: string | number)=>void;
  handleSave:()=>void;
  isView:boolean;
}
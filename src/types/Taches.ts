import IUser from "./ITaches";

export class Tache implements IUser{
    id?:number
    name: string
    description: string
    dateDebut: string
    dateFin: string
    etat?:number
    public static TACHES_KEY='taches';

    constructor(name:string, description:string,dateDebut:string, dateFin:string,etat?:number){
        this.name = name
        this.description = description
        this.dateDebut = dateDebut
        this.dateFin = dateFin
        this.etat = etat

    }
    save(){
        const storage = localStorage.getItem(Tache.TACHES_KEY)||"[]";
        const taches:any[] = JSON.parse(storage);
        taches.push({
            id: taches.length,
            name:this.name,
            description:this.description,
            dateDebut:this.dateDebut,
            dateFin:this.dateFin,
            etat:this.etat,
        })
        localStorage.setItem(Tache.TACHES_KEY,JSON.stringify(taches));
    }
    static TacheIn(credentials:{name:string,description:string,dateDebut:string,dateFin:string}):Tache|boolean{
        const storage = localStorage.getItem(Tache.TACHES_KEY)||"[]";
        const taches:any[] = JSON.parse(storage);
        console.log(taches);
        const res = taches.find((tache)=>{
           
            try{
                return tache.name == credentials.description&&(tache.dateDebut)==credentials.dateDebut;
                
                console.log(taches);
            }catch(e){
                return false;
            }
        })
        if(res){
            return new Tache(res.name,res.description,res.dateDebut,res.dateFin,res.etat);
       
        }else{
            return false;
        }
    }
    
    getKey() {
        return Tache.TACHES_KEY;
    }
    // ListeTaches(funct: Function) {
    //     const store = localStorage.getItem(Tache.TACHES_KEY)||"[]";
    //     const taches:any[] = JSON.parse(store);

    //     funct(taches);

    // }
}
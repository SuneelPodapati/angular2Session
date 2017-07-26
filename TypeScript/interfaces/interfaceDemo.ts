export interface IFly{
    fly();
}

export interface ICarry{
    carry();
}

export interface IFlyCarry extends IFly, ICarry{}

export class Bird implements IFly{
    fly(){
        return "Birds Fly";
    }
}

export class Plane implements IFly, ICarry{
    fly(){
        return "Planes Fly";
    }
    carry(){
        return "Planes carries people..";
    }
}

export class Missile implements IFlyCarry{
    fly(){
        return "chases targets..";
    }
    carry(){
        return "Missiles carries shit!!";
    }
}
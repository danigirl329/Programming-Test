//rover.js
function createRover(mapSize, startPos){
    if(mapSize == null || startPos == null){
        return null;
    }
    if(isNaN(mapSize.x) || isNaN(mapSize.y) || isNaN(startPos.x) || isNaN(startPos.y) ){
        return null;
    }
    if(startPos.d.toUpperCase() != 'N' && startPos.d.toUpperCase() != 'S' && startPos.d.toUpperCase() != 'E' && startPos.d.toUpperCase() != 'W'){
        return null;
    }
    //ridiculously large validation
    if(startPos.x > mapSize.x || startPos.y > mapSize.y || mapSize.x < 1 || mapSize.x > 1000 || mapSize.y < 1 || mapSize.y > 1000){
        return null;
    }   else{
        this.map = {};
        this.map.x = mapSize.x;
        this.map.y = mapSize.y;
        this.myPos = {};
        this.myPos.x = startPos.x;
        this.myPos.y = startPos.y;
        this.myPos.d = startPos.d;
    }
    this.move = function(direction){
        switch(direction){
            case "L":
                this.turnLeft(myPos.d);
                break;
            case "R":
                this.turnRight(myPos.d);
                break;
            case "M":
                this.moveForward();
                break;
        }
        if(myPos.x > mapSize.x){
            myPos.x = mapSize.x;   
        }
        if(myPos.y > mapSize.y){
            myPos.y = mapSize.y;
        }
    }
    this.turnLeft = function(direction){
        switch (direction){
            case "N":
                myPos.d = "W"
                break;
            case "S":
                myPos.d = "E"
                break;
            case "E":
                myPos.d = "N"
                break;
            case "W":
                myPos.d = "S"
                break;
        }
    }
    this.turnRight = function(direction){
        switch (direction){
            case "N":
                myPos.d = "E"
                break;
            case "S":
                myPos.d = "W"
                break;
            case "E":
                myPos.d = "S"
                break;
            case "W":
                myPos.d = "N"
                break;
        }
    }
    this.moveForward = function(){
        switch(myPos.d){
            case "N":
                myPos.y += 1;
                break;
            case "S":
                myPos.y -= 1;
                break;
            case "E":
                myPos.x += 1;
                break;
            case "W":
                myPos.x -= 1;
                break;
        }
    }
    this.runMovements = function(directions){
        if(directions == null){
            return false;
        }
        for(i=0;i<directions.length;i++){
            if(directions[i].toUpperCase() != 'L' && directions[i].toUpperCase() != 'R' & directions[i].toUpperCase() != 'M'){
                return false;   
            }
        }
        for(i=0;i<directions.length;i++){
            this.move(directions[i]);
        }
        return true;
    };
    this.getPosition = function(){
        return this.myPos;
    };
    return this;
};

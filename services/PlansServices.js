const Database = require("../models/index"); //Estou importando o banco de dados PLan.js para salvar no banco

class PlansServicer {

    constructor(){
        this.Plan = Database["Plan"];
    }

    async getAll(){ //Para lista todas as registros cadastrados no banco de dados
        
        try {
            return await this.Plan.findAll()
            
        } catch (error) {
            return undefined
        }
    }

    async getById(id){ //Para listar so os ID registros cadastrados no banco de dados
        
        try {
            return await this.Plan.findByPk(id)
            
        } catch (error) {
            return undefined
        }
    }

    //Criação de metodos
    async loja(plans){// Criação dos planos
        let errors = {};

        if(plans.import != undefined){
            plans.import = true;
        }else{
            plans.import = false;
        }

        let isValid = this.validate(plans, errors) // Se for valido (Para validação)
        
        if (isValid) {
            try {          
                await this.Plan.create(plans); // Pegar os dados e salvar no Banco de  dados
                return true;     
            } catch (error) {
                console.log(error)
               erros.sytem_msg = "Não foi possível salvar o plano";
               return errors;
            }
        } else {
            return errors;
        }
       
       
    }

    validate(plan, errors){ //Para validação
        
        let erroCount = 0;
        
        if(plan.title == undefined){
            errors.title_msg = "O titulo é inválido!";
            erroCount++;
        }else if(plan.title.length < 3 ){
            errors.title_msg = "O titulo é inválido!"
            erroCount++;
        }

        if(plan.value == undefined || plan.value < 30){
            errors.value_msg = "Preço inválido!"
            erroCount++;
        } 

        if(erroCount == 0){
            return true;
        }else{
            return false;
        }
    }

    
}

module.exports = new PlansServicer();
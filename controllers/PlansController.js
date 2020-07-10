const PlansServices = require("../services/PlansServices");//Iportando a pasta de serviços

class PlansController {

    async index(req, res){
        let plans = await PlansServices.getAll()
        //res.json(plans)
        res.render("plans/index",{plans})
    }

    async edit(req, res){
        let edit = await PlansServices.getById(req.params.id)
        //res.json(edit)
        res.render("plans/edit",{edit, title_msg: req.flash('title_msg'), value_msg: req.flash('value_msg')})
    }

    create(req, res){
        res.render("plans/create", {title_msg: req.flash('title_msg'), value_msg: req.flash('value_msg')})

    }

    async loja(req, res){
        var { title, list, client, value, imports} = req.body;

        let plan = { // Isto daqui é o que vai para o banco de dados
            title,
            list,
            client,
            value,
            import: imports
        }
       
        let result = await PlansServices.loja(plan);
        
        if(result == true){

        }else{
            req.flash('title_msg', result.title_msg);
            req.flash('value_msg', result.value_msg);
            res.redirect("/admin/plans/create")
        }
    }
}

module.exports = new PlansController();
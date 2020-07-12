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

    async update(req, res){// Para editar e salvr no banco
        var { title, list, client, value, imports, id} = req.body;

        let plan = { // Isto daqui é o que vai para o banco de dados
            title,
            list,
            client,
            value,
            import: imports,
            id
        }
       
        let result = await PlansServices.update(id,plan);
        
        if(result == true){
            res.redirect("/admin/plans");
        }else{
            req.flash('title_msg', result.title_msg);
            req.flash('value_msg', result.value_msg);
            res.redirect("/admin/plans/edit/"+id)
        }
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

    async desativado(req, res){
        let id = req.params.id;
        await PlansServices.desativado(id)
        res.redirect("/admin/plans");
    }

    async ativo(req, res){
        let id = req.params.id;
        await PlansServices.ativo(id);
        res.redirect("/admin/plans");
    }
}

module.exports = new PlansController();
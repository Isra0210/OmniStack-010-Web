const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

/*index: mostra uma lista desse recurso
show: mostra um unico exemplo do recurso
store: sotre quando criamos o recurso 
update: atualizar esse recurso 
destroy: para deletar esse recurso*/

module.exports = {
    //listando devs
    async index(request, response){
        const devs = await Dev.find();

        return response.json(devs);
    },


    //cadastrado devs
    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });

        if(!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

            const { name = login, avatar_url, bio} = apiResponse.data;

            const techsArray = parseStringAsArray(techs);

            const location = {
                type: "Point",
                coordinates: [longitude, latitude],
            };

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            });
        }

        return response.send(dev);
    }
}
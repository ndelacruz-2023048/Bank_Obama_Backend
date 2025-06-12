import Service from "./service.model";

export const getServices = async(req, res) => {
    try {
        const services = await Service.find()

        if(services.length === 0){
            return res.status(404).send(
                {
                    success: false,
                    message: 'Products not found :('
                }
            )
        }
        return res.send(
            {
                success: true,
                message: 'Products found:', 
                services
            }   
        )
    } catch (e) {
        console.error(e)
        return res.status(500).send(
            {
                success: false,
                message: 'General error'
            }
        )
    }
}

export const addNewService = async(req, res) => {
    try {
        let data = req.body
        let service = new Service(data)
        await service.save()
        return res.status(200).send(
            {
                success: true,
                message: `Room created successfully`,
                service
            }
        )
    } catch (e) {
        console.error(e);
        return res.status(500).send(
            {
                success: false,
                message: 'General error'
            }
        )
    }
}

export const editService = async(req, res) => {
    try {
        let id = req.params.id
        let data = req.body
        let service = await Service.findByIdAndUpdate(
            id, 
            data,
            {
                new: true
            }
        )
        if(!service) return res.status(404).send(
            {
                success: false,
                message: 'Service not found'
            }
        )
        return res.send(
            {
                success: true,
                message: 'Service update: ', service
            }
        )
    } catch (e) {
        console.error(e)
        return res.status(500).send(
            {
                success: false,
                message: 'General error'
            }
        )
    }
}

export const deleteService = async (req, res) => {
    try{
        let { id } = req.params
        let service = await Service.findById(id)
        if (!service){
            res.status(400).send({message: 'You cannot found this Pervice'})
        }else{
            await Product.findByIdAndDelete(id)
            return res.send({message:`was deleted`})
        }
    }catch(err){
        console.error('General error', err)
        return res.status(500).send({message: 'General error', err})
    }
}
import express from 'express'
import * as userServices from '../services/userServices'

//import toNewUser from '../extras/utils'

const router = express.Router()

router.get('/', async (_req, res) => {
    try {
        const data = await userServices.getEntries.getAll();
        return res.json(data);
    } catch (error) {
        res.status(500).json({ error: error });
    }
})

<<<<<<< HEAD
router.get('/:id', async (req, res) => {
    try {
        const data = await userServices.getEntries.findById(req.params.id);
        return res.json(data);
    } catch (error) {
        res.status(500).json({ error: error });
    }
=======
router.get('/:id', async(req, res) => {
    const data = await userServices.getEntries.findById(req.params.id)
    return res.json(data);
})

router.post('/', async(req, res) => {
    const data = await userServices.getEntries.create(req.body)
    return res.json(data);
})

router.post('/addExperiencias/:idUser/:idExp', async(req, res) => {
    const data = await userServices.getEntries.addExperiencies(req.params.idUser,req.params.idExp)
    return res.json(data);
})

router.put('/:id', async(req, res) => {
    const data = await userServices.getEntries.update(req.params.id,req.body)
    return res.json(data);
})

router.delete('/:id', async(req, res) => {
    const data = await userServices.getEntries.delete(req.params.id)
    return res.json(data);
>>>>>>> 352e7feb04cd9db4e22ca90d1ffe727b14a0aa24
})

router.delete('/delParticipant/:idUser/:idExp', async(req, res) => {
    const data = await userServices.getEntries.delExperiencies(req.params.idUser,req.params.idExp)
    return res.json(data);
})


router.post('/', async (req, res) => {
    try {
        const data = await userServices.getEntries.create(req.body);
        return res.json(data);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const data = await userServices.getEntries.update(req.params.id, req.body);
        return res.json(data);
    } catch (error) {
        res.status(500).json({ error: error });
    }

})

router.delete('/:id', async (req, res) => {
    try {
        const data = await userServices.getEntries.delete(req.params.id);
        return res.json(data);
    } catch (error) {
        res.status(500).json({ error: error });
    }
})

router.get('/:userId/experiences', async (req, res) => {
    try {
        const experiences = await userServices.getEntries.getUserExperiences(req.params.userId);
        return res.json(experiences);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});    


export default router










const Moto = require('./moto');

// Obtener todos los usuarios
exports.getMotos= async (req, res) => {
    try {
        const motos = await Moto.find();
        res.json(motos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Crear un nuevo usuario
exports.createMoto = async (req, res) => {
    const moto = new Moto({
        patente: req.body.patente,
        marca: req.body.marca,
        cilindrada: req.body.cilindrada,
        multa: req.body.multa,
    });

    try {
        const newMoto = await moto.save();
        res.status(201).json(newMoto);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Obtener un usuario por su PATENTE
exports.getMotoByPatente = async (req, res) => {
    try {
        const moto = await Moto.findOne({ patente: req.params.patente });
        if (!moto) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(moto);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Actualizar un usuario por su PATENTE
exports.updateMoto = async (req, res) => {
    try {
        const updatedMoto = await Moto.findOneAndUpdate(
            { patente: req.params.patente },
            {
                $set: {
                    patente: req.body.patente,
                    marca: req.body.marca,
                    cilindrada: req.body.cilindrada,
                    multa: req.body.multa,
                },
            },
            { new: true }
        );
        res.json(updatedMoto);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Eliminar un usuario por su PATENTE
exports.deleteMoto = async (req, res) => {
    try {
        await Moto.findOneAndRemove({ patente: req.params.patente });
        res.json({ message: 'Moto eliminado' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

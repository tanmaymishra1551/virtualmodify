import Vendor from '../models/vendorModel.js';

export const getAllVendors = (req, res) => {
    Vendor.find()
        .then((vendors) => res.json(vendors))
        .catch((err) => res.status(500).json({ error: err.message }));
};


export const createVendor = (req, res) => {
    const newVendor = new Vendor({
        name: req.body.name,
        companyName: req.body.companyName,
        email: req.body.email,
        password: req.body.password,
    });

    newVendor.save()
        .then((vendor) => res.status(201).json(vendor))
        .catch((err) => res.status(500).json({ error: err.message }));
};

export const updateVendor = (req, res) => {
    Vendor.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        companyName: req.body.companyName,
        email: req.body.email,
        password: req.body.password,
    }, { new: true })
        .then((updatedVendor) => res.json(updatedVendor))
        .catch((err) => res.status(500).json({ error: err.message }));
};


export const deleteVendor = (req, res) => {
    Vendor.findByIdAndDelete(req.params.id)
        .then(() => res.json({ message: 'Vendor deleted' }))
        .catch((err) => res.status(500).json({ error: err.message }));
};
router.get('/', async (req, res) => {
    const admins = await Admin.find();
    const customers = await Customer.find();
    const riders = await Rider.find();
    const staff = await Staff.find();

    res.json({ admins, customers, riders, staff });
});
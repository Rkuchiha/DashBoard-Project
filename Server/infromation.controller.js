import Info from "./models/information.js";

const getAllInformation = async (req, res) => {
    try {
        const info = await Info.find({}).limit(req.query._end);

        res.status(200).json(info);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getInformationByID = async (req, res) => {
    try {
        const { id } = req.params;

        const info = await Info.findOne({ _id: id });

        if (info) {
            res.status(200).json(info);
        } else {
            res.status(404).json({ message: "Information not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { getAllInformation, getInformationByID };
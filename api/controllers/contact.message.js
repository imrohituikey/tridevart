import Contact from '../models/user.contact.js';

export const contactFormSubmit = async(req,res)=>{
    const {name, email, subject, message} = req.body;
    if(name!==null && email!==null && subject!==null && message!==null){
        try {
            const {name, email, subject, message} = Contact.findOne({email : email});
            if(name==name && email==email && subject==subject && message==message)
            {
                res.status(400).json({ message: "Something went wrong..." });
            }
        } catch (error) {
            const validMessage = new Contact({name: name, email :email, subject : subject, message : message});
            await validMessage.save().then(() => {
                res.status(201).json({ message: "Message is Sent successfully" });
              })
            res.status(400).json({ message: "Something went wrong..." });
        }
    }
}
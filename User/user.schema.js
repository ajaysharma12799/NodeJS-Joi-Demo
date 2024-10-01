import Joi from "joi";

// Schema
const registerUserSchema = Joi.object({
    username: Joi.string().min(2).max(30).required(),
    email: Joi.string().min(2).max(30).required(),
    password: Joi.string().min(5).max(30).required(),
});

const loginUserSchema = Joi.object({
    email: Joi.string().min(2).max(30).required(),
    password: Joi.string().min(5).max(30).required(),
});

// Policy Middleware
const registerUserValidationPolicy = (req, res, next) => {
    const { error } = registerUserSchema.validate({
        ...req.body,
    });

    if (error) {
        switch (error.details[0].context.key) {
            case "username":
                return res.status(400).json({
                    error: error.details[0].message,
                });

            case "email":
                return res.status(400).json({
                    error: error.details[0].message,
                });

            case "password":
                return res.status(400).json({
                    error: error.details[0].message,
                });

            default:
                break;
        }
    }

    return next();
};

const loginUserValidationPolicy = (req, res, next) => {
    const { error } = loginUserSchema.validate({
        ...req.body,
    });

    if (error) {
        switch (error.details[0].context.key) {
            case "email":
                return res.status(400).json({
                    error: error.details[0].message,
                });

            case "password":
                return res.status(400).json({
                    error: error.details[0].message,
                });

            default:
                break;
        }
    }

    return next();
};

export {
    registerUserSchema,
    loginUserSchema,
    registerUserValidationPolicy,
    loginUserValidationPolicy,
};

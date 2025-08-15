import Joi from "joi";

const externalUrls = Joi.object({
  spotify: Joi.string().required(),
});

const followers = Joi.object({
  href: Joi.string().allow(null).required(),
  total: Joi.number(),
});

export const getArtistSchema = Joi.object({
  external_urls: externalUrls,
  followers: followers,
  genres: Joi.array().required(),
  href: Joi.string().required(),
  id: Joi.string().required(),
  images: Joi.array().required(),
  name: Joi.string().required(),
  popularity: Joi.number().required(),
  type: Joi.string().valid("artist").required(),
  uri: Joi.string().required(),
});

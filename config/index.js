let ENV = process.env.NODE_ENV || 'development';

export default require(`./${ENV}/`);

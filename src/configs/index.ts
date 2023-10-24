const configLoader = () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  return require(`./config.${process.env.NODE_ENV}`).default
}

export default configLoader

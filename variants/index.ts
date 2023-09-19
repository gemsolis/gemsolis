export const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      duration: 0.2,
      staggerChildren: 0.1,
    },
  },
};

export const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

module.exports = `const RandomToken = () => {
    return Math.random().toString(36).substring(2, 7) + Math.random().toString(36).substring(2, 7);
}

export default RandomToken;`;
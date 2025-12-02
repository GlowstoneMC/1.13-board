function changeBlockId(block, newId) {
  if (typeof block.setId === 'function') {
    block.setId(newId);
  } else {
    throw new Error('The provided object does not have a setId method');
  }
}

// Example usage:
const myBlock = { id: 1, setId: (id) => { this.id = id; } };
changeBlockId(myBlock, 2);
console.log(myBlock.id); // Outputs: 2
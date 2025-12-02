// Function to handle block entity flattening
function handleBlockEntityFlattening(blockEntities) {
  // Create a map to store flattened entities by their unique identifier
  const flattenedMap = new Map();

  // Iterate over each block entity
  for (const blockEntity of blockEntities) {
    const { id, properties } = blockEntity;

    // Check if the entity already exists in the map
    if (!flattenedMap.has(id)) {
      // If not, add it to the map with its properties
      flattenedMap.set(id, { ...blockEntity });
    } else {
      // If it exists, merge the new properties into the existing entity
      const existingEntity = flattenedMap.get(id);
      Object.assign(existingEntity, properties);
    }
  }

  // Return the list of unique entities
  return Array.from(flattenedMap.values());
}

// Example usage:
const blockEntities = [
  { id: '1', type: 'block', properties: { color: 'red' } },
  { id: '2', type: 'entity', properties: { size: 'large' } },
  { id: '1', type: 'block', properties: { material: 'wood' } }
];

const uniqueEntities = handleBlockEntityFlattening(blockEntities);
console.log(uniqueEntities); // Outputs: [{ id: '1', type: 'block', properties: { color: 'red', material: 'wood' } }, { id: '2', type: 'entity', properties: { size: 'large' } }]

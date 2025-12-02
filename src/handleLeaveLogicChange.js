function handleLeaveLogicChange(amount) {
  if (typeof amount !== 'number' || isNaN(amount)) {
    throw new Error('Invalid amount provided');
  }

  const fee = amount * 0.1; // Calculate the fee as 10% of the amount
  return amount - fee;
}

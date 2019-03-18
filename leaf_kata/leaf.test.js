class Branch {
  constructor(branches, leaves) {
    this.leaves = leaves;
    this.branches = branches;
  }

  sum() {
    let total = this.leaves.reduce((a, b) => a + b);

    this.branches.forEach(branch => {
      total += branch.leaves.reduce((a, b) => a + b);
    });

    return total;
  }
}

it("sums leaves", () => {
  const branch = new Branch([], [6, 2]);

  expect(branch.sum()).toEqual(8);
});

it("sums child branches", () => {
  const childBranch = new Branch([], [3, 5]);
  const parentBranch = new Branch([childBranch], [6]);

  expect(parentBranch.sum()).toEqual(14);
});

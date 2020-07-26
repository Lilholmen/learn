console.log(
    [4,16,64,36,25]
    .filter(element => !(element % 2))
    .reduceRight((sum, element) => sum + Math.sqrt(element), 0));


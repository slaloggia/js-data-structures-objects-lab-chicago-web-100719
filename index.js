const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
    let newDriver = Object.assign({}, driver, {[key]: value})
    return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    Object.assign(driver, {[key]: value})
    return driver
}

function deleteFromDriverByKey(driver, key) {
    const newDriver = {...driver};
    delete newDriver[key];
    return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}
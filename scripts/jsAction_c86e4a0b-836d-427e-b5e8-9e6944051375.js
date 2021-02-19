var alexis = context.variableManager.getValue("item");
var time = context.variableManager.getValue("time");
if (alexis==null || time==null) {
context.fail("Variable not found");
}

logger.debug("The item is: "+alexis);
logger.debug(" The time is: "+time);
logger.debug(" The LG is: "+context.currentLG.name);
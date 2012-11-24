define({
	parameterView_title: 'Parameter View:',
	description_title: 'Function:',
	returnMessage_title: 'Return:',
	
	parameterView_sum: 'sum(number1, [number2, ..., numberN])',
	description_sum: 'Combines a set of numeric inputs and return the value as a number.',
	returnMessage_sum: 'Evaluates to a numeric',
	
	parameterView_avg: 'avg(number1, [number2, ..., numberN])',
	description_avg: 'Calculates the average of a set of numeric inputs and return the value as a number.',
	returnMessage_avg: 'Evaluates to a numeric',
	
	parameterView_sumIf: 'sumIf(booleanCondition, number1)',
	description_sumIf: 'Evaluates the sum  across all sub-documents of a given attribute based on the condition.  The condition will evaluate each sub-document independently.',
	returnMessage_sumIf: 'Evaluates to a numeric',
	
	parameterView_avgIf: 'avgIf(booleanCondition, number1)',
	description_avgIf: 'Evaluates the average across all sub-documents of a given attribute based on the condition.  The condition will evaluate each sub-document independently.',
	returnMessage_avgIf: 'Evaluates to a numeric',
	
	parameterView_capitalizeFirst: 'capitalizeFirst(string)',
	description_capitalizeFirst: 'Capitalizes the first letter of the string.',
	returnMessage_capitalizeFirst: 'Evaluates to a string',
	
	parameterView_max: 'max(number1, [number2, ..., numberN])',
	description_max: 'Returns the largest of the given numeric inputs.',
	returnMessage_max: 'Evaluates to a numeric',
	
	parameterView_min: 'min(number1, [number2, ..., numberN])',
	description_min: 'Returns the smallest of the given numeric inputs.',
	returnMessage_min: 'Evaluates to a numeric',
	
	parameterView_median: 'median(number1, [number2, ..., numberN])',
	description_median: 'Evaluates the median of the given numeric inputs.',
	returnMessage_median: 'Evaluates to a numeric',
	
	parameterView_ceil: 'ceil(number)',
	description_ceil: 'Converts a number with fraction to a next whole number.',
	returnMessage_ceil: 'Evaluates to a numeric',
	
	parameterView_round: 'round(fromNumber, integerPrecision)',
	description_round: 'Returns the first numeric input rounded to the precision defined by the second numeric input.',
	returnMessage_round: 'Evaluates to a numeric',
	
	parameterView_sqrt: 'sqrt(number)',
	description_sqrt: 'Returns the rounded positive square root of the number.',
	returnMessage_sqrt: 'Evaluates to a numeric',
	
	parameterView_pow: 'pow(number, numberToPower)',
	description_pow: 'Returns the value of the first numeric input raised to the power of the second numeric input.',
	returnMessage_pow: 'Evaluates to a numeric',
	
	parameterView_exp: 'exp(number)',
	description_exp: "Returns Euler's number e raised to the power of the numeric input.",
	returnMessage_exp: 'Evaluates to a numeric',
	
	parameterView_abs: 'abs(number)',
	description_abs: 'Returns the positive equivalent to the numeric input entered.',
	returnMessage_abs: 'Evaluates to a numeric',
	
	parameterView_mod: 'mod(number, numberDivisor)',
	description_mod: 'Returns the remainder of the first numeric input divided by the second numeric input.',
	returnMessage_mod: 'Evaluates to a numeric',
	
	parameterView_formatAsCurrency: 'formatAsCurrency(number, stringCurrencyCode)',
	description_formatAsCurrency: 'Returns a float or integer in the correct currency format.',
	returnMessage_formatAsCurrency: 'Evaluates to a string',
	
	parameterView_upper: 'upper(string)',
	description_upper: 'Converts all of the characters in the input string to upper case.',
	returnMessage_upper: 'Evaluates to a string',
	
	parameterView_lower: 'lower(string)',
	description_lower: 'Converts all of the characters in the input string to lower case.',
	returnMessage_lower: 'Evaluates to a string',
	
	parameterView_substring: 'substring(string, integerStart, [integerEnd])',
	description_substring: 'Returns a part of the string from a larger string.',
	returnMessage_substring: 'Evaluates to a string',
	
	parameterView_replace: 'replace(stringReplaceIn, stringReplaceWhat, stringReplaceWith, [integerOccurancesToReplace])',
	description_replace: 'Returns a string with all* found occurrences replaced with the new string.  *The optional integer input defines the number of occurrences to replace starting from the beginning of the string.',
	returnMessage_replace: 'Evaluates to a string',
	
	parameterView_concat: 'concat(string1, [string2, ..., stringN])',
	description_concat: 'Concatenates, or combines, strings.',
	returnMessage_concat: 'Evaluates to a string',
	
	parameterView_trim: 'trim(string)',
	description_trim: 'Removes white space from both ends of a string.',
	returnMessage_trim: 'Evaluates to a string',
	
	parameterView_len: 'len(string)',
	description_len: 'Returns the length of a string.',
	returnMessage_len: 'Evaluates to a integer',
	
	parameterView_find: 'find(stringFindIn, stringFindWhat, [integerFrom, integerTo])',
	description_find: 'Returns the position/index of a substring within a string. ',
	returnMessage_find: 'Evaluates to a integer',
	
	parameterView_startsWith: 'startswith(stringFindIn, stringStart)',
	description_startsWith: 'Checks whether a string starts with a particular substring. ',
	returnMessage_startsWith: 'Evaluates to a boolean',

	parameterView_endsWith: 'endswith(stringFindIn, stringEnd)',
	description_endsWith: 'Checks whether a string ends with a particular substring.',
	returnMessage_endsWith: 'Evaluates to a boolean',
	
	parameterView_isNumber: 'isNumber(string)',
	description_isNumber: 'Returns true when a string is a number and will return false in all other cases.',
	returnMessage_isNumber: 'Evaluates to a boolean',
	
	parameterView_contains: 'contains(stringFindIn, stringFindWhat, booleanIgnoreCase)',
	description_contains: 'Checks whether a string contains a particular substring.',
	returnMessage_contains: 'Evaluates to a boolean',
	
	parameterView_query: 'query(selectionTable, booleanCondition, selectionReturnColumn)',
	description_query: 'Allows users to search through data tables and return select values.',
	returnMessage_query: 'Evaluates to the column type',
	
	parameterView_toFloat: 'toFloat(stringOrInteger)',
	description_toFloat: 'Converts a string that represents a number or an integer into a float.',
	returnMessage_toFloat: 'Evaluates to a float',
	
	parameterView_toString: 'toString(numeric)',
	description_toString: 'Converts a numeric value into a string.',
	returnMessage_toString: 'Evaluates to a string',
	
	parameterView_toInteger: 'toInteger(stringOrFloat)',
	description_toInteger: 'Converts a string that represents a number or a float into an integer.',
	returnMessage_toInteger: 'Evaluates to a integer',
	
	parameterView_if: 'if(booleanCondition, trueValue, falseValue)',
	description_if: 'Based on a condition, a true value is used or a false value is used.'	
});
function str_con_cat(str1, str2) {
    // Calculate the minimum length of str1 and str2
    const m = Math.min(str1.length, str2.length);
  
    // Use substring to concatenate the common characters from the end of both strings
    return str1.substring(str1.length - m) + str2.substring(str2.length - m);
}

// Call the function with sample arguments and log the results to the console
console.log(str_con_cat("Python", "JS"));
console.log(str_con_cat("ab", "cdef")); 
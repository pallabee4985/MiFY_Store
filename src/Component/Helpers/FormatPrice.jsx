import React from 'react'

function FormatPrice({price}) {

  return (
    Intl.NumberFormat("en-IN",{
    Style:"Currency",
    Currency:"INR",
    maximumFractionDigits:2
}).format(price/100))
}

export default FormatPrice

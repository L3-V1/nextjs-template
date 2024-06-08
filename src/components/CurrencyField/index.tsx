import React, { ChangeEvent, useEffect, useState } from "react"
import { formatCurrency } from "@/utils/formatters"
import { TextField } from "@mui/material"
import { FieldError, FieldValues, Path, PathValue, useFormContext } from "react-hook-form"

type CurrencyFieldProps<V extends FieldValues> = {
    label:string,
    field:keyof V,
    defaultValue?:number,
    isFetching?:boolean,
}

const CurrencyField = <V extends FieldValues>({
    label,
    field,
    defaultValue,
    isFetching=false
}: CurrencyFieldProps<V>) => {
    const {
        setValue,
        formState: { errors }
    } = useFormContext<V>()

    const [formattedValue, setFormattedValue] = useState<string>(
        !!defaultValue
        ? formatCurrency(defaultValue)
        : formatCurrency
    )

    useEffect(() => {
        if(defaultValue) setFormattedValue(formatCurrency(defaultValue))
    }, [defaultValue])

    return (
        <TextField
            fullWidth
            label={label}
            variant="outlined"
            disabled={isFetching}
            value={formattedValue}
            onChange={(e:ChangeEvent<HTMLInputElement>) => {
                const value = parseFloat(e.target.value.replace(/\D/g, ""))/100
                setFormattedValue(formatCurrency(value))
                setValue(
                    field as Path<V>,
                    value as PathValue<V, Path<V>>,
                    { shouldValidate:true }
                )
            }}
            error={!!errors[field]}
            helperText={(errors[field] as FieldError)?.message}
        />
    )
}

export default CurrencyField
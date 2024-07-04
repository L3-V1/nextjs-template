import React, { ChangeEvent, useEffect, useState } from "react"
import { FieldError, FieldValues, Path, PathValue, useFormContext } from "react-hook-form"
import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from "@mui/material"
import useFetchAll from "@/hooks/useFetchAll"

type CustomRadioProps<T extends object, V extends FieldValues> = {
    label:string,
    route:string,
    field:keyof V,
    fieldLabel:keyof T,
    fieldValue:keyof T,
    defaultValue?:string | number,
    isFetching?:boolean
}

const CustomRadio = <T extends object, V extends FieldValues>({
    label,
    route,
    field,
    fieldLabel,
    fieldValue,
    defaultValue,
    isFetching
}: CustomRadioProps<T, V>) => {
    const {
        setValue,
        formState: { errors }
    } = useFormContext<V>()

    const { isLoading, data } = useFetchAll<T>(route)

    const [selectedValue, setSelectedValue] = useState(defaultValue ?? null)

    useEffect(() => {
        if(defaultValue) setSelectedValue(defaultValue)
    }, [defaultValue])

    return (
        <FormControl fullWidth error={!!errors[field]} disabled={isLoading || isFetching}>
            <FormLabel>{isLoading || isFetching ? "Carregando..." : label}</FormLabel>
            <RadioGroup
                row
                value={selectedValue}
                onChange={(e:ChangeEvent<HTMLInputElement>) => {
                    const value = e.target.value
                    setSelectedValue(value)
                    setValue(
                        field as Path<V>,
                        value as PathValue<V, Path<V>>,
                        { shouldValidate:true }
                    )
                }}
            >
                {data.map((item) => (
                    <FormControlLabel
                        key={item[fieldValue] as React.Key}
                        value={item[fieldValue] as string | number}
                        label={`${item[fieldLabel]}`}
                        control={<Radio />}
                    />
                ))}
            </RadioGroup>
            <FormHelperText>{(errors[field] as FieldError)?.message}</FormHelperText>
        </FormControl>
    )
}

export default CustomRadio
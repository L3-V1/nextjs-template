import React, { useEffect, useState } from "react"
import { FieldError, FieldValues, Path, PathValue, useFormContext } from "react-hook-form"
import { Autocomplete, TextField } from "@mui/material"
import useFetchAll from "@/hooks/useFetchAll"

type CustomAutocompleteProps<T extends object, V extends FieldValues> = {
    label:string,
    route:string,
    field:keyof V,
    fieldLabel:keyof T,
    fieldValue:keyof T,
    defaultValue?:string | number,
    isFetching?:boolean
}

const CustomAutocomplete = <T extends object, V extends FieldValues>({
    label,
    route,
    field,
    fieldLabel,
    fieldValue,
    defaultValue,
    isFetching
}: CustomAutocompleteProps<T, V>) => {
    const {
        setValue,
        formState: { errors }
    } = useFormContext<V>()

    const { isLoading, data } = useFetchAll<T>(route)

    const [selectedValue, setSelectedValue] = useState<T | null>(null)

    useEffect(() => {
        if(defaultValue){
            const found = data.find((item) => item[fieldValue] == defaultValue)
            if(!found) return
            setSelectedValue(found)
        }
    }, [defaultValue, fieldValue, data])

    return (
        <Autocomplete
            fullWidth
            disablePortal
            disabled={isLoading || isFetching}
            options={data}
            getOptionLabel={(option) => `${option[fieldLabel]}`}
            getOptionKey={(option) => `${option[fieldValue]}`}
            isOptionEqualToValue={(option, value) => option[fieldValue] == value[fieldValue]}
            value={selectedValue}
            onChange={(event: React.SyntheticEvent<Element, Event>, value: T | null) => {
                setSelectedValue(value)
                setValue(
                    field as Path<V>,
                    (!!value ? value[fieldValue] : undefined) as PathValue<V, Path<V>>,
                    { shouldValidate:true }
                )
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={isLoading || isFetching ? "Carregando..." : label}
                    error={!!errors[field]}
                    helperText={(errors[field] as FieldError)?.message}  
                />
            )}
        />
    )
}

export default CustomAutocomplete
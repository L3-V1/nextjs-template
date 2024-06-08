import React, { ReactNode, useEffect, useState } from "react"
import { FieldError, FieldValues, Path, PathValue, useFormContext } from "react-hook-form"
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import useFetchAll from "@/hooks/useFetchAll"

type CustomSelectProps<T extends object, V extends FieldValues> = {
    label:string,
    route:string,
    field:keyof V,
    fieldLabel:keyof T,
    fieldValue:keyof T,
    placeholder:string,
    defaultValue?:string | number,
    isFetching?:boolean
}

const CustomSelect = <T extends object, V extends FieldValues>({
    label,
    route,
    field,
    fieldLabel,
    fieldValue,
    placeholder,
    defaultValue,
    isFetching
}: CustomSelectProps<T, V>) => {
    const {
        setValue,
        formState: { errors }
    } = useFormContext<V>()

    const { isLoading, data } = useFetchAll<T>(route)

    const [selectedValue, setSelectedValue] = useState<string | number>(defaultValue ?? 0)

    useEffect(() => {
        if(defaultValue) setSelectedValue(defaultValue)
    }, [defaultValue])

    return (
        <FormControl fullWidth error={!!errors[field]} disabled={isLoading || isFetching}>
            <InputLabel>{label}</InputLabel>
            <Select
                label={label}
                variant="outlined"
                value={selectedValue}
                onChange={(e:SelectChangeEvent<string | number>) => {
                    const value = e.target.value
                    setSelectedValue(value)
                    setValue(
                        field as Path<V>,
                        (value == 0 ? undefined : value) as PathValue<V, Path<V>>,
                        { shouldValidate:true }
                    )
                }}
            >
                <MenuItem value={0}>{isLoading || isFetching ? "Carregando..." : placeholder}</MenuItem>
                {data.map((item) => (
                    <MenuItem key={item[fieldValue] as React.Key} value={item[fieldValue] as string | number}>
                        {item[fieldLabel] as ReactNode}
                    </MenuItem>
                ))}
            </Select>
            <FormHelperText>{(errors[field] as FieldError)?.message}</FormHelperText>
        </FormControl>
    )
}

export default CustomSelect
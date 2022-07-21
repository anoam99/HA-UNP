import {
  Autocomplete,
  Grid,
  Typography,
  TextField,
} from '@mui/material';
import { ChangeEvent, FC, FormEvent, useMemo, useRef } from 'react';
import { InfoTooltip } from '../InfoTooltip';
import { Input } from '../Input';
import { Button } from '../Button';
import {
  CreateLinkFormProps,
  FormField,
} from './CreateLinkForm.types';
import { useUserContext } from '../../context/userContext';
import { CreateCheckoutLinkDto } from '../../services';

const initialState: CreateCheckoutLinkDto = {
  amount: '1000',
  firstName: 'noam Assulin',
  currency: 'USD',
};

const CreateLinkForm: FC<CreateLinkFormProps> = ({
  handleSubmit,
}) => {
  const { businessName } = useUserContext();
  const formData = useRef<CreateCheckoutLinkDto>(initialState);

  const FIELDS: FormField[] = [
    {
      id: 'amount',
      required: true,
      label: 'Total Amount',
      helperText: 'Total amount should include VAT',
      type: 'integer',
      Component: Input,
      xs: 8,
    },
    {
      id: 'currency',
      required: true,
      label: 'Currency',
      options: ['GBP', 'EUR', 'USD'],
      Component: Autocomplete,
      renderInput: (params) => (
        <TextField required {...params} label="Currency" />
      ),
      xs: 4,
    },
    {
      id: 'firstName',
      required: true,
      label: 'Customer Name',
      helperText: [
        'Enter the name of the customer as it appears on your account.',
        <span key={1}>
          <InfoTooltip message="If the name doesn’t match our records - a new customer card will be opened for this name." />
        </span>,
      ],
      Component: Input,
      xs: 12,
    },
    {
      id: 'description',
      label: 'Description',
      Component: Input,
      xs: 12,
    },
  ];

  const FieldsComponents = useMemo(() => {
    return FIELDS.map(({ xs, id, Component, ...props }) => {
      return (
        <Grid item xs={xs} key={id}>
          <Component
            sx={{ width: '100%', marginBottom: '17px' }}
            {...props}
            onChange={(
              e: ChangeEvent<HTMLInputElement>,
              value: string
            ) => (formData.current![id] = value || e.target.value)}
          />
        </Grid>
      );
    });
  }, []);

  return (
    <form
      onSubmit={(event: FormEvent) =>
        formData.current && handleSubmit(event, formData.current)
      }
    >
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h3" marginBottom={'19px'}>
            {`Hello, ${businessName}!`}
          </Typography>
          <Typography variant="h4" marginBottom={'30px'}>
            Request payment from your customer{' '}
            <span>
              <InfoTooltip message="Create a dedicated payment request for your customer and share it via multiple available channels." />
            </span>
          </Typography>
        </Grid>
        {FieldsComponents}
        <Grid item xs={12}>
          <Button type="submit" variant="contained" fullWidth>
            Request Payment
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default CreateLinkForm;

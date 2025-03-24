import { z } from 'zod';

export let IsStringList = () => z.array(z.string());

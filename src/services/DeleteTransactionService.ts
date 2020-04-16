import { getRepository } from 'typeorm';
import Transaction from '../models/Transaction';
// import AppError from '../errors/AppError';

interface Request {
  id: string;
}

class DeleteTransactionService {
  public async execute({ id }: Request): Promise<void> {
    const transactionsRepository = getRepository(Transaction);
    const transaction = await transactionsRepository.findOne(id);

    if (!transaction) {
      throw new Error('this id dont exists');
    }

    await transactionsRepository.delete(id);
  }
}

export default DeleteTransactionService;

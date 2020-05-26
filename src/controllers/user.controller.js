import _ from 'lodash';
import UserService from '../services/user.service';
import statusCodes from '../helpers/statusCodes';
import ResponseHandlers from '../helpers/responseHandlers';
import { generateToken } from '../helpers/tokenHandlers';
import { hashPassword } from '../helpers/passwordHandlers';
import customMessages from '../helpers/customMessages';

const {
  created,
} = statusCodes;
const {
  signupSuccess,
} = customMessages.successMessages;

/**
 * @description this class user controller will work with req, and response to interact with db
 */
export default class UserController extends ResponseHandlers {
  /**
   * @constructor
   */
  constructor() {
    super();
    this.res = {};
  }

  /**
     * @param {object} req
     * @param {object} res
     * @returns {object} response to user
     */
  saveNewUser = async (req, res) => {
    this.res = res;
    req.body.password = hashPassword(req.body.password);
    const { dataValues } = await UserService.saveAll(req.body);
    this.successResponse(this.res, created, signupSuccess, generateToken(dataValues), undefined);
  }
}
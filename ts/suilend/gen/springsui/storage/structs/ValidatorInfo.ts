import { Option } from "../../../_dependencies/onchain/0x1/option/structs/index.js";
import { Bag } from "../../../_dependencies/onchain/0x2/bag/structs/index.js";
import { ID } from "../../../_dependencies/onchain/0x2/object/structs/index.js";
import {
  FungibleStakedSui,
  PoolTokenExchangeRate,
  StakedSui,
} from "../../../_dependencies/onchain/0x3/staking-pool/structs/index.js";
import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeStr,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  fieldToJSON,
  phantom,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../_framework/util.js";
import { PKG_V1 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64, fromHex, toHex } from "@mysten/sui/utils";

export function isValidatorInfo(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::storage::ValidatorInfo`;
}

export interface ValidatorInfoFields {
  stakingPoolId: ToField<ID>;
  validatorAddress: ToField<"address">;
  activeStake: ToField<Option<FungibleStakedSui>>;
  inactiveStake: ToField<Option<StakedSui>>;
  exchangeRate: ToField<PoolTokenExchangeRate>;
  totalSuiAmount: ToField<"u64">;
  extraFields: ToField<Bag>;
}

export type ValidatorInfoReified = Reified<ValidatorInfo, ValidatorInfoFields>;

/**
 * Move struct: `ValidatorInfo`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::storage`
 */
export class ValidatorInfo implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::storage::ValidatorInfo`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = ValidatorInfo.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::storage::ValidatorInfo`;
  readonly $typeArgs: [];
  readonly $isPhantom = ValidatorInfo.$isPhantom;

  readonly stakingPoolId: ToField<ID>;
  readonly validatorAddress: ToField<"address">;
  readonly activeStake: ToField<Option<FungibleStakedSui>>;
  readonly inactiveStake: ToField<Option<StakedSui>>;
  readonly exchangeRate: ToField<PoolTokenExchangeRate>;
  readonly totalSuiAmount: ToField<"u64">;
  readonly extraFields: ToField<Bag>;

  private constructor(typeArgs: [], fields: ValidatorInfoFields) {
    this.$fullTypeName = composeSuiType(
      ValidatorInfo.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::storage::ValidatorInfo`;
    this.$typeArgs = typeArgs;

    this.stakingPoolId = fields.stakingPoolId;
    this.validatorAddress = fields.validatorAddress;
    this.activeStake = fields.activeStake;
    this.inactiveStake = fields.inactiveStake;
    this.exchangeRate = fields.exchangeRate;
    this.totalSuiAmount = fields.totalSuiAmount;
    this.extraFields = fields.extraFields;
  }

  static reified(): ValidatorInfoReified {
    return {
      typeName: ValidatorInfo.$typeName,
      fullTypeName: composeSuiType(
        ValidatorInfo.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::storage::ValidatorInfo`,
      typeArgs: [] as [],
      isPhantom: ValidatorInfo.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        ValidatorInfo.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        ValidatorInfo.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => ValidatorInfo.fromBcs(data),
      bcs: ValidatorInfo.bcs,
      fromJSONField: (field: any) => ValidatorInfo.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => ValidatorInfo.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        ValidatorInfo.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        ValidatorInfo.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        ValidatorInfo.fetch(client, id),
      new: (fields: ValidatorInfoFields) => {
        return new ValidatorInfo([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return ValidatorInfo.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<ValidatorInfo>> {
    return phantom(ValidatorInfo.reified());
  }
  static get p() {
    return ValidatorInfo.phantom();
  }

  static get bcs() {
    return bcs.struct("ValidatorInfo", {
      staking_pool_id: ID.bcs,
      validator_address: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
      active_stake: Option.bcs(FungibleStakedSui.bcs),
      inactive_stake: Option.bcs(StakedSui.bcs),
      exchange_rate: PoolTokenExchangeRate.bcs,
      total_sui_amount: bcs.u64(),
      extra_fields: Bag.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): ValidatorInfo {
    return ValidatorInfo.reified().new({
      stakingPoolId: decodeFromFields(ID.reified(), fields.staking_pool_id),
      validatorAddress: decodeFromFields("address", fields.validator_address),
      activeStake: decodeFromFields(
        Option.reified(FungibleStakedSui.reified()),
        fields.active_stake,
      ),
      inactiveStake: decodeFromFields(
        Option.reified(StakedSui.reified()),
        fields.inactive_stake,
      ),
      exchangeRate: decodeFromFields(
        PoolTokenExchangeRate.reified(),
        fields.exchange_rate,
      ),
      totalSuiAmount: decodeFromFields("u64", fields.total_sui_amount),
      extraFields: decodeFromFields(Bag.reified(), fields.extra_fields),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): ValidatorInfo {
    if (!isValidatorInfo(item.type)) {
      throw new Error("not a ValidatorInfo type");
    }

    return ValidatorInfo.reified().new({
      stakingPoolId: decodeFromFieldsWithTypes(
        ID.reified(),
        item.fields.staking_pool_id,
      ),
      validatorAddress: decodeFromFieldsWithTypes(
        "address",
        item.fields.validator_address,
      ),
      activeStake: decodeFromFieldsWithTypes(
        Option.reified(FungibleStakedSui.reified()),
        item.fields.active_stake,
      ),
      inactiveStake: decodeFromFieldsWithTypes(
        Option.reified(StakedSui.reified()),
        item.fields.inactive_stake,
      ),
      exchangeRate: decodeFromFieldsWithTypes(
        PoolTokenExchangeRate.reified(),
        item.fields.exchange_rate,
      ),
      totalSuiAmount: decodeFromFieldsWithTypes(
        "u64",
        item.fields.total_sui_amount,
      ),
      extraFields: decodeFromFieldsWithTypes(
        Bag.reified(),
        item.fields.extra_fields,
      ),
    });
  }

  static fromBcs(data: Uint8Array): ValidatorInfo {
    return ValidatorInfo.fromFields(ValidatorInfo.bcs.parse(data));
  }

  toJSONField() {
    return {
      stakingPoolId: this.stakingPoolId,
      validatorAddress: this.validatorAddress,
      activeStake: fieldToJSON<Option<FungibleStakedSui>>(
        `${Option.$typeName}<${FungibleStakedSui.$typeName}>`,
        this.activeStake,
      ),
      inactiveStake: fieldToJSON<Option<StakedSui>>(
        `${Option.$typeName}<${StakedSui.$typeName}>`,
        this.inactiveStake,
      ),
      exchangeRate: this.exchangeRate.toJSONField(),
      totalSuiAmount: this.totalSuiAmount.toString(),
      extraFields: this.extraFields.toJSONField(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): ValidatorInfo {
    return ValidatorInfo.reified().new({
      stakingPoolId: decodeFromJSONField(ID.reified(), field.stakingPoolId),
      validatorAddress: decodeFromJSONField("address", field.validatorAddress),
      activeStake: decodeFromJSONField(
        Option.reified(FungibleStakedSui.reified()),
        field.activeStake,
      ),
      inactiveStake: decodeFromJSONField(
        Option.reified(StakedSui.reified()),
        field.inactiveStake,
      ),
      exchangeRate: decodeFromJSONField(
        PoolTokenExchangeRate.reified(),
        field.exchangeRate,
      ),
      totalSuiAmount: decodeFromJSONField("u64", field.totalSuiAmount),
      extraFields: decodeFromJSONField(Bag.reified(), field.extraFields),
    });
  }

  static fromJSON(json: Record<string, any>): ValidatorInfo {
    if (json.$typeName !== ValidatorInfo.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return ValidatorInfo.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): ValidatorInfo {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isValidatorInfo(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a ValidatorInfo object`,
      );
    }
    return ValidatorInfo.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): ValidatorInfo {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isValidatorInfo(data.bcs.type)
      ) {
        throw new Error(`object at is not a ValidatorInfo object`);
      }

      return ValidatorInfo.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return ValidatorInfo.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<ValidatorInfo> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching ValidatorInfo object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isValidatorInfo(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a ValidatorInfo object`);
    }

    return ValidatorInfo.fromSuiObjectData(res.data);
  }
}

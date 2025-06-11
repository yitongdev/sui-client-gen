import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeStr,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  phantom,
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../../../_framework/util.js";
import { Bag } from "../../../0x2/bag/structs/index.js";
import { ID } from "../../../0x2/object/structs/index.js";
import { PKG_V21 } from "../../constants.js";
import { StakingPool } from "../../staking-pool/structs/index.js";
import { ValidatorMetadata as ValidatorMetadata1 } from "./ValidatorMetadata.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isValidator(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V21}::validator::Validator`;
}

export interface ValidatorFields {
  metadata: ToField<ValidatorMetadata1>;
  votingPower: ToField<"u64">;
  operationCapId: ToField<ID>;
  gasPrice: ToField<"u64">;
  stakingPool: ToField<StakingPool>;
  commissionRate: ToField<"u64">;
  nextEpochStake: ToField<"u64">;
  nextEpochGasPrice: ToField<"u64">;
  nextEpochCommissionRate: ToField<"u64">;
  extraFields: ToField<Bag>;
}

export type ValidatorReified = Reified<Validator, ValidatorFields>;

/**
 * Move struct: `Validator`
 * Module: `0000000000000000000000000000000000000000000000000000000000000003::validator`
 */
export class Validator implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V21}::validator::Validator`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = Validator.$typeName;
  readonly $fullTypeName: `${typeof PKG_V21}::validator::Validator`;
  readonly $typeArgs: [];
  readonly $isPhantom = Validator.$isPhantom;

  readonly metadata: ToField<ValidatorMetadata1>;
  readonly votingPower: ToField<"u64">;
  readonly operationCapId: ToField<ID>;
  readonly gasPrice: ToField<"u64">;
  readonly stakingPool: ToField<StakingPool>;
  readonly commissionRate: ToField<"u64">;
  readonly nextEpochStake: ToField<"u64">;
  readonly nextEpochGasPrice: ToField<"u64">;
  readonly nextEpochCommissionRate: ToField<"u64">;
  readonly extraFields: ToField<Bag>;

  private constructor(typeArgs: [], fields: ValidatorFields) {
    this.$fullTypeName = composeSuiType(
      Validator.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V21}::validator::Validator`;
    this.$typeArgs = typeArgs;

    this.metadata = fields.metadata;
    this.votingPower = fields.votingPower;
    this.operationCapId = fields.operationCapId;
    this.gasPrice = fields.gasPrice;
    this.stakingPool = fields.stakingPool;
    this.commissionRate = fields.commissionRate;
    this.nextEpochStake = fields.nextEpochStake;
    this.nextEpochGasPrice = fields.nextEpochGasPrice;
    this.nextEpochCommissionRate = fields.nextEpochCommissionRate;
    this.extraFields = fields.extraFields;
  }

  static reified(): ValidatorReified {
    return {
      typeName: Validator.$typeName,
      fullTypeName: composeSuiType(
        Validator.$typeName,
        ...[],
      ) as `${typeof PKG_V21}::validator::Validator`,
      typeArgs: [] as [],
      isPhantom: Validator.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => Validator.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        Validator.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => Validator.fromBcs(data),
      bcs: Validator.bcs,
      fromJSONField: (field: any) => Validator.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => Validator.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        Validator.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        Validator.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        Validator.fetch(client, id),
      new: (fields: ValidatorFields) => {
        return new Validator([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Validator.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<Validator>> {
    return phantom(Validator.reified());
  }
  static get p() {
    return Validator.phantom();
  }

  static get bcs() {
    return bcs.struct("Validator", {
      metadata: ValidatorMetadata1.bcs,
      voting_power: bcs.u64(),
      operation_cap_id: ID.bcs,
      gas_price: bcs.u64(),
      staking_pool: StakingPool.bcs,
      commission_rate: bcs.u64(),
      next_epoch_stake: bcs.u64(),
      next_epoch_gas_price: bcs.u64(),
      next_epoch_commission_rate: bcs.u64(),
      extra_fields: Bag.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): Validator {
    return Validator.reified().new({
      metadata: decodeFromFields(ValidatorMetadata1.reified(), fields.metadata),
      votingPower: decodeFromFields("u64", fields.voting_power),
      operationCapId: decodeFromFields(ID.reified(), fields.operation_cap_id),
      gasPrice: decodeFromFields("u64", fields.gas_price),
      stakingPool: decodeFromFields(StakingPool.reified(), fields.staking_pool),
      commissionRate: decodeFromFields("u64", fields.commission_rate),
      nextEpochStake: decodeFromFields("u64", fields.next_epoch_stake),
      nextEpochGasPrice: decodeFromFields("u64", fields.next_epoch_gas_price),
      nextEpochCommissionRate: decodeFromFields(
        "u64",
        fields.next_epoch_commission_rate,
      ),
      extraFields: decodeFromFields(Bag.reified(), fields.extra_fields),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): Validator {
    if (!isValidator(item.type)) {
      throw new Error("not a Validator type");
    }

    return Validator.reified().new({
      metadata: decodeFromFieldsWithTypes(
        ValidatorMetadata1.reified(),
        item.fields.metadata,
      ),
      votingPower: decodeFromFieldsWithTypes("u64", item.fields.voting_power),
      operationCapId: decodeFromFieldsWithTypes(
        ID.reified(),
        item.fields.operation_cap_id,
      ),
      gasPrice: decodeFromFieldsWithTypes("u64", item.fields.gas_price),
      stakingPool: decodeFromFieldsWithTypes(
        StakingPool.reified(),
        item.fields.staking_pool,
      ),
      commissionRate: decodeFromFieldsWithTypes(
        "u64",
        item.fields.commission_rate,
      ),
      nextEpochStake: decodeFromFieldsWithTypes(
        "u64",
        item.fields.next_epoch_stake,
      ),
      nextEpochGasPrice: decodeFromFieldsWithTypes(
        "u64",
        item.fields.next_epoch_gas_price,
      ),
      nextEpochCommissionRate: decodeFromFieldsWithTypes(
        "u64",
        item.fields.next_epoch_commission_rate,
      ),
      extraFields: decodeFromFieldsWithTypes(
        Bag.reified(),
        item.fields.extra_fields,
      ),
    });
  }

  static fromBcs(data: Uint8Array): Validator {
    return Validator.fromFields(Validator.bcs.parse(data));
  }

  toJSONField() {
    return {
      metadata: this.metadata.toJSONField(),
      votingPower: this.votingPower.toString(),
      operationCapId: this.operationCapId,
      gasPrice: this.gasPrice.toString(),
      stakingPool: this.stakingPool.toJSONField(),
      commissionRate: this.commissionRate.toString(),
      nextEpochStake: this.nextEpochStake.toString(),
      nextEpochGasPrice: this.nextEpochGasPrice.toString(),
      nextEpochCommissionRate: this.nextEpochCommissionRate.toString(),
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

  static fromJSONField(field: any): Validator {
    return Validator.reified().new({
      metadata: decodeFromJSONField(
        ValidatorMetadata1.reified(),
        field.metadata,
      ),
      votingPower: decodeFromJSONField("u64", field.votingPower),
      operationCapId: decodeFromJSONField(ID.reified(), field.operationCapId),
      gasPrice: decodeFromJSONField("u64", field.gasPrice),
      stakingPool: decodeFromJSONField(
        StakingPool.reified(),
        field.stakingPool,
      ),
      commissionRate: decodeFromJSONField("u64", field.commissionRate),
      nextEpochStake: decodeFromJSONField("u64", field.nextEpochStake),
      nextEpochGasPrice: decodeFromJSONField("u64", field.nextEpochGasPrice),
      nextEpochCommissionRate: decodeFromJSONField(
        "u64",
        field.nextEpochCommissionRate,
      ),
      extraFields: decodeFromJSONField(Bag.reified(), field.extraFields),
    });
  }

  static fromJSON(json: Record<string, any>): Validator {
    if (json.$typeName !== Validator.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return Validator.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): Validator {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isValidator(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a Validator object`,
      );
    }
    return Validator.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): Validator {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isValidator(data.bcs.type)) {
        throw new Error(`object at is not a Validator object`);
      }

      return Validator.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Validator.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<Validator> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching Validator object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isValidator(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a Validator object`);
    }

    return Validator.fromSuiObjectData(res.data);
  }
}

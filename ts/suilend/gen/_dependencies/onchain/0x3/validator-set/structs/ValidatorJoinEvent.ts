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
import { ID } from "../../../0x2/object/structs/index.js";
import { PKG_V21 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64, fromHex, toHex } from "@mysten/sui/utils";

export function isValidatorJoinEvent(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V21}::validator_set::ValidatorJoinEvent`;
}

export interface ValidatorJoinEventFields {
  epoch: ToField<"u64">;
  validatorAddress: ToField<"address">;
  stakingPoolId: ToField<ID>;
}

export type ValidatorJoinEventReified = Reified<ValidatorJoinEvent, ValidatorJoinEventFields>;

/**
 * Move struct: `ValidatorJoinEvent`
 * Module: `0000000000000000000000000000000000000000000000000000000000000003::validator_set`
 */
export class ValidatorJoinEvent implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V21}::validator_set::ValidatorJoinEvent`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = ValidatorJoinEvent.$typeName;
  readonly $fullTypeName: `${typeof PKG_V21}::validator_set::ValidatorJoinEvent`;
  readonly $typeArgs: [];
  readonly $isPhantom = ValidatorJoinEvent.$isPhantom;

  readonly epoch: ToField<"u64">;
  readonly validatorAddress: ToField<"address">;
  readonly stakingPoolId: ToField<ID>;

  private constructor(typeArgs: [], fields: ValidatorJoinEventFields) {
    this.$fullTypeName = composeSuiType(
      ValidatorJoinEvent.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V21}::validator_set::ValidatorJoinEvent`;
    this.$typeArgs = typeArgs;

    this.epoch = fields.epoch;
    this.validatorAddress = fields.validatorAddress;
    this.stakingPoolId = fields.stakingPoolId;
  }

  static reified(): ValidatorJoinEventReified {
    return {
      typeName: ValidatorJoinEvent.$typeName,
      fullTypeName: composeSuiType(
        ValidatorJoinEvent.$typeName,
        ...[],
      ) as `${typeof PKG_V21}::validator_set::ValidatorJoinEvent`,
      typeArgs: [] as [],
      isPhantom: ValidatorJoinEvent.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => ValidatorJoinEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => ValidatorJoinEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => ValidatorJoinEvent.fromBcs(data),
      bcs: ValidatorJoinEvent.bcs,
      fromJSONField: (field: any) => ValidatorJoinEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => ValidatorJoinEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => ValidatorJoinEvent.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => ValidatorJoinEvent.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => ValidatorJoinEvent.fetch(client, id),
      new: (fields: ValidatorJoinEventFields) => {
        return new ValidatorJoinEvent([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return ValidatorJoinEvent.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<ValidatorJoinEvent>> {
    return phantom(ValidatorJoinEvent.reified());
  }
  static get p() {
    return ValidatorJoinEvent.phantom();
  }

  static get bcs() {
    return bcs.struct("ValidatorJoinEvent", {
      epoch: bcs.u64(),
      validator_address: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
      staking_pool_id: ID.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): ValidatorJoinEvent {
    return ValidatorJoinEvent.reified().new({
      epoch: decodeFromFields("u64", fields.epoch),
      validatorAddress: decodeFromFields("address", fields.validator_address),
      stakingPoolId: decodeFromFields(ID.reified(), fields.staking_pool_id),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): ValidatorJoinEvent {
    if (!isValidatorJoinEvent(item.type)) {
      throw new Error("not a ValidatorJoinEvent type");
    }

    return ValidatorJoinEvent.reified().new({
      epoch: decodeFromFieldsWithTypes("u64", item.fields.epoch),
      validatorAddress: decodeFromFieldsWithTypes("address", item.fields.validator_address),
      stakingPoolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.staking_pool_id),
    });
  }

  static fromBcs(data: Uint8Array): ValidatorJoinEvent {
    return ValidatorJoinEvent.fromFields(ValidatorJoinEvent.bcs.parse(data));
  }

  toJSONField() {
    return {
      epoch: this.epoch.toString(),
      validatorAddress: this.validatorAddress,
      stakingPoolId: this.stakingPoolId,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): ValidatorJoinEvent {
    return ValidatorJoinEvent.reified().new({
      epoch: decodeFromJSONField("u64", field.epoch),
      validatorAddress: decodeFromJSONField("address", field.validatorAddress),
      stakingPoolId: decodeFromJSONField(ID.reified(), field.stakingPoolId),
    });
  }

  static fromJSON(json: Record<string, any>): ValidatorJoinEvent {
    if (json.$typeName !== ValidatorJoinEvent.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return ValidatorJoinEvent.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): ValidatorJoinEvent {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isValidatorJoinEvent(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a ValidatorJoinEvent object`);
    }
    return ValidatorJoinEvent.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): ValidatorJoinEvent {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isValidatorJoinEvent(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a ValidatorJoinEvent object`);
      }

      return ValidatorJoinEvent.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return ValidatorJoinEvent.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<ValidatorJoinEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching ValidatorJoinEvent object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isValidatorJoinEvent(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a ValidatorJoinEvent object`);
    }

    return ValidatorJoinEvent.fromSuiObjectData(res.data);
  }
}

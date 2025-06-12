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

export function isValidatorLeaveEvent(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V21}::validator_set::ValidatorLeaveEvent`;
}

export interface ValidatorLeaveEventFields {
  epoch: ToField<"u64">;
  validatorAddress: ToField<"address">;
  stakingPoolId: ToField<ID>;
  isVoluntary: ToField<"bool">;
}

export type ValidatorLeaveEventReified = Reified<ValidatorLeaveEvent, ValidatorLeaveEventFields>;

/**
 * Move struct: `ValidatorLeaveEvent`
 * Module: `0000000000000000000000000000000000000000000000000000000000000003::validator_set`
 */
export class ValidatorLeaveEvent implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V21}::validator_set::ValidatorLeaveEvent`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = ValidatorLeaveEvent.$typeName;
  readonly $fullTypeName: `${typeof PKG_V21}::validator_set::ValidatorLeaveEvent`;
  readonly $typeArgs: [];
  readonly $isPhantom = ValidatorLeaveEvent.$isPhantom;

  readonly epoch: ToField<"u64">;
  readonly validatorAddress: ToField<"address">;
  readonly stakingPoolId: ToField<ID>;
  readonly isVoluntary: ToField<"bool">;

  private constructor(typeArgs: [], fields: ValidatorLeaveEventFields) {
    this.$fullTypeName = composeSuiType(
      ValidatorLeaveEvent.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V21}::validator_set::ValidatorLeaveEvent`;
    this.$typeArgs = typeArgs;

    this.epoch = fields.epoch;
    this.validatorAddress = fields.validatorAddress;
    this.stakingPoolId = fields.stakingPoolId;
    this.isVoluntary = fields.isVoluntary;
  }

  static reified(): ValidatorLeaveEventReified {
    return {
      typeName: ValidatorLeaveEvent.$typeName,
      fullTypeName: composeSuiType(
        ValidatorLeaveEvent.$typeName,
        ...[],
      ) as `${typeof PKG_V21}::validator_set::ValidatorLeaveEvent`,
      typeArgs: [] as [],
      isPhantom: ValidatorLeaveEvent.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => ValidatorLeaveEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => ValidatorLeaveEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => ValidatorLeaveEvent.fromBcs(data),
      bcs: ValidatorLeaveEvent.bcs,
      fromJSONField: (field: any) => ValidatorLeaveEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => ValidatorLeaveEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => ValidatorLeaveEvent.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => ValidatorLeaveEvent.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => ValidatorLeaveEvent.fetch(client, id),
      new: (fields: ValidatorLeaveEventFields) => {
        return new ValidatorLeaveEvent([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return ValidatorLeaveEvent.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<ValidatorLeaveEvent>> {
    return phantom(ValidatorLeaveEvent.reified());
  }
  static get p() {
    return ValidatorLeaveEvent.phantom();
  }

  static get bcs() {
    return bcs.struct("ValidatorLeaveEvent", {
      epoch: bcs.u64(),
      validator_address: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
      staking_pool_id: ID.bcs,
      is_voluntary: bcs.bool(),
    });
  }

  static fromFields(fields: Record<string, any>): ValidatorLeaveEvent {
    return ValidatorLeaveEvent.reified().new({
      epoch: decodeFromFields("u64", fields.epoch),
      validatorAddress: decodeFromFields("address", fields.validator_address),
      stakingPoolId: decodeFromFields(ID.reified(), fields.staking_pool_id),
      isVoluntary: decodeFromFields("bool", fields.is_voluntary),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): ValidatorLeaveEvent {
    if (!isValidatorLeaveEvent(item.type)) {
      throw new Error("not a ValidatorLeaveEvent type");
    }

    return ValidatorLeaveEvent.reified().new({
      epoch: decodeFromFieldsWithTypes("u64", item.fields.epoch),
      validatorAddress: decodeFromFieldsWithTypes("address", item.fields.validator_address),
      stakingPoolId: decodeFromFieldsWithTypes(ID.reified(), item.fields.staking_pool_id),
      isVoluntary: decodeFromFieldsWithTypes("bool", item.fields.is_voluntary),
    });
  }

  static fromBcs(data: Uint8Array): ValidatorLeaveEvent {
    return ValidatorLeaveEvent.fromFields(ValidatorLeaveEvent.bcs.parse(data));
  }

  toJSONField() {
    return {
      epoch: this.epoch.toString(),
      validatorAddress: this.validatorAddress,
      stakingPoolId: this.stakingPoolId,
      isVoluntary: this.isVoluntary,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): ValidatorLeaveEvent {
    return ValidatorLeaveEvent.reified().new({
      epoch: decodeFromJSONField("u64", field.epoch),
      validatorAddress: decodeFromJSONField("address", field.validatorAddress),
      stakingPoolId: decodeFromJSONField(ID.reified(), field.stakingPoolId),
      isVoluntary: decodeFromJSONField("bool", field.isVoluntary),
    });
  }

  static fromJSON(json: Record<string, any>): ValidatorLeaveEvent {
    if (json.$typeName !== ValidatorLeaveEvent.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return ValidatorLeaveEvent.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): ValidatorLeaveEvent {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isValidatorLeaveEvent(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a ValidatorLeaveEvent object`,
      );
    }
    return ValidatorLeaveEvent.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): ValidatorLeaveEvent {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isValidatorLeaveEvent(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a ValidatorLeaveEvent object`);
      }

      return ValidatorLeaveEvent.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return ValidatorLeaveEvent.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<ValidatorLeaveEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching ValidatorLeaveEvent object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isValidatorLeaveEvent(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a ValidatorLeaveEvent object`);
    }

    return ValidatorLeaveEvent.fromSuiObjectData(res.data);
  }
}

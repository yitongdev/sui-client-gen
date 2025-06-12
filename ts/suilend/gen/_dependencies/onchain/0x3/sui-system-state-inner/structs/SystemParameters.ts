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
import { PKG_V21 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isSystemParameters(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V21}::sui_system_state_inner::SystemParameters`;
}

export interface SystemParametersFields {
  epochDurationMs: ToField<"u64">;
  stakeSubsidyStartEpoch: ToField<"u64">;
  maxValidatorCount: ToField<"u64">;
  minValidatorJoiningStake: ToField<"u64">;
  validatorLowStakeThreshold: ToField<"u64">;
  validatorVeryLowStakeThreshold: ToField<"u64">;
  validatorLowStakeGracePeriod: ToField<"u64">;
  extraFields: ToField<Bag>;
}

export type SystemParametersReified = Reified<SystemParameters, SystemParametersFields>;

/**
 * Move struct: `SystemParameters`
 * Module: `0000000000000000000000000000000000000000000000000000000000000003::sui_system_state_inner`
 */
export class SystemParameters implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V21}::sui_system_state_inner::SystemParameters`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = SystemParameters.$typeName;
  readonly $fullTypeName: `${typeof PKG_V21}::sui_system_state_inner::SystemParameters`;
  readonly $typeArgs: [];
  readonly $isPhantom = SystemParameters.$isPhantom;

  readonly epochDurationMs: ToField<"u64">;
  readonly stakeSubsidyStartEpoch: ToField<"u64">;
  readonly maxValidatorCount: ToField<"u64">;
  readonly minValidatorJoiningStake: ToField<"u64">;
  readonly validatorLowStakeThreshold: ToField<"u64">;
  readonly validatorVeryLowStakeThreshold: ToField<"u64">;
  readonly validatorLowStakeGracePeriod: ToField<"u64">;
  readonly extraFields: ToField<Bag>;

  private constructor(typeArgs: [], fields: SystemParametersFields) {
    this.$fullTypeName = composeSuiType(
      SystemParameters.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V21}::sui_system_state_inner::SystemParameters`;
    this.$typeArgs = typeArgs;

    this.epochDurationMs = fields.epochDurationMs;
    this.stakeSubsidyStartEpoch = fields.stakeSubsidyStartEpoch;
    this.maxValidatorCount = fields.maxValidatorCount;
    this.minValidatorJoiningStake = fields.minValidatorJoiningStake;
    this.validatorLowStakeThreshold = fields.validatorLowStakeThreshold;
    this.validatorVeryLowStakeThreshold = fields.validatorVeryLowStakeThreshold;
    this.validatorLowStakeGracePeriod = fields.validatorLowStakeGracePeriod;
    this.extraFields = fields.extraFields;
  }

  static reified(): SystemParametersReified {
    return {
      typeName: SystemParameters.$typeName,
      fullTypeName: composeSuiType(
        SystemParameters.$typeName,
        ...[],
      ) as `${typeof PKG_V21}::sui_system_state_inner::SystemParameters`,
      typeArgs: [] as [],
      isPhantom: SystemParameters.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => SystemParameters.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => SystemParameters.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => SystemParameters.fromBcs(data),
      bcs: SystemParameters.bcs,
      fromJSONField: (field: any) => SystemParameters.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => SystemParameters.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => SystemParameters.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => SystemParameters.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => SystemParameters.fetch(client, id),
      new: (fields: SystemParametersFields) => {
        return new SystemParameters([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return SystemParameters.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<SystemParameters>> {
    return phantom(SystemParameters.reified());
  }
  static get p() {
    return SystemParameters.phantom();
  }

  static get bcs() {
    return bcs.struct("SystemParameters", {
      epoch_duration_ms: bcs.u64(),
      stake_subsidy_start_epoch: bcs.u64(),
      max_validator_count: bcs.u64(),
      min_validator_joining_stake: bcs.u64(),
      validator_low_stake_threshold: bcs.u64(),
      validator_very_low_stake_threshold: bcs.u64(),
      validator_low_stake_grace_period: bcs.u64(),
      extra_fields: Bag.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): SystemParameters {
    return SystemParameters.reified().new({
      epochDurationMs: decodeFromFields("u64", fields.epoch_duration_ms),
      stakeSubsidyStartEpoch: decodeFromFields("u64", fields.stake_subsidy_start_epoch),
      maxValidatorCount: decodeFromFields("u64", fields.max_validator_count),
      minValidatorJoiningStake: decodeFromFields("u64", fields.min_validator_joining_stake),
      validatorLowStakeThreshold: decodeFromFields("u64", fields.validator_low_stake_threshold),
      validatorVeryLowStakeThreshold: decodeFromFields(
        "u64",
        fields.validator_very_low_stake_threshold,
      ),
      validatorLowStakeGracePeriod: decodeFromFields(
        "u64",
        fields.validator_low_stake_grace_period,
      ),
      extraFields: decodeFromFields(Bag.reified(), fields.extra_fields),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): SystemParameters {
    if (!isSystemParameters(item.type)) {
      throw new Error("not a SystemParameters type");
    }

    return SystemParameters.reified().new({
      epochDurationMs: decodeFromFieldsWithTypes("u64", item.fields.epoch_duration_ms),
      stakeSubsidyStartEpoch: decodeFromFieldsWithTypes(
        "u64",
        item.fields.stake_subsidy_start_epoch,
      ),
      maxValidatorCount: decodeFromFieldsWithTypes("u64", item.fields.max_validator_count),
      minValidatorJoiningStake: decodeFromFieldsWithTypes(
        "u64",
        item.fields.min_validator_joining_stake,
      ),
      validatorLowStakeThreshold: decodeFromFieldsWithTypes(
        "u64",
        item.fields.validator_low_stake_threshold,
      ),
      validatorVeryLowStakeThreshold: decodeFromFieldsWithTypes(
        "u64",
        item.fields.validator_very_low_stake_threshold,
      ),
      validatorLowStakeGracePeriod: decodeFromFieldsWithTypes(
        "u64",
        item.fields.validator_low_stake_grace_period,
      ),
      extraFields: decodeFromFieldsWithTypes(Bag.reified(), item.fields.extra_fields),
    });
  }

  static fromBcs(data: Uint8Array): SystemParameters {
    return SystemParameters.fromFields(SystemParameters.bcs.parse(data));
  }

  toJSONField() {
    return {
      epochDurationMs: this.epochDurationMs.toString(),
      stakeSubsidyStartEpoch: this.stakeSubsidyStartEpoch.toString(),
      maxValidatorCount: this.maxValidatorCount.toString(),
      minValidatorJoiningStake: this.minValidatorJoiningStake.toString(),
      validatorLowStakeThreshold: this.validatorLowStakeThreshold.toString(),
      validatorVeryLowStakeThreshold: this.validatorVeryLowStakeThreshold.toString(),
      validatorLowStakeGracePeriod: this.validatorLowStakeGracePeriod.toString(),
      extraFields: this.extraFields.toJSONField(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): SystemParameters {
    return SystemParameters.reified().new({
      epochDurationMs: decodeFromJSONField("u64", field.epochDurationMs),
      stakeSubsidyStartEpoch: decodeFromJSONField("u64", field.stakeSubsidyStartEpoch),
      maxValidatorCount: decodeFromJSONField("u64", field.maxValidatorCount),
      minValidatorJoiningStake: decodeFromJSONField("u64", field.minValidatorJoiningStake),
      validatorLowStakeThreshold: decodeFromJSONField("u64", field.validatorLowStakeThreshold),
      validatorVeryLowStakeThreshold: decodeFromJSONField(
        "u64",
        field.validatorVeryLowStakeThreshold,
      ),
      validatorLowStakeGracePeriod: decodeFromJSONField("u64", field.validatorLowStakeGracePeriod),
      extraFields: decodeFromJSONField(Bag.reified(), field.extraFields),
    });
  }

  static fromJSON(json: Record<string, any>): SystemParameters {
    if (json.$typeName !== SystemParameters.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return SystemParameters.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): SystemParameters {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isSystemParameters(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a SystemParameters object`);
    }
    return SystemParameters.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): SystemParameters {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isSystemParameters(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a SystemParameters object`);
      }

      return SystemParameters.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return SystemParameters.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<SystemParameters> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching SystemParameters object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isSystemParameters(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a SystemParameters object`);
    }

    return SystemParameters.fromSuiObjectData(res.data);
  }
}

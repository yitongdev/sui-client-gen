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

export function isSystemParametersV2(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V21}::sui_system_state_inner::SystemParametersV2`;
}

export interface SystemParametersV2Fields {
  epochDurationMs: ToField<"u64">;
  stakeSubsidyStartEpoch: ToField<"u64">;
  minValidatorCount: ToField<"u64">;
  maxValidatorCount: ToField<"u64">;
  minValidatorJoiningStake: ToField<"u64">;
  validatorLowStakeThreshold: ToField<"u64">;
  validatorVeryLowStakeThreshold: ToField<"u64">;
  validatorLowStakeGracePeriod: ToField<"u64">;
  extraFields: ToField<Bag>;
}

export type SystemParametersV2Reified = Reified<SystemParametersV2, SystemParametersV2Fields>;

/**
 * Move struct: `SystemParametersV2`
 * Module: `0000000000000000000000000000000000000000000000000000000000000003::sui_system_state_inner`
 */
export class SystemParametersV2 implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V21}::sui_system_state_inner::SystemParametersV2`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = SystemParametersV2.$typeName;
  readonly $fullTypeName: `${typeof PKG_V21}::sui_system_state_inner::SystemParametersV2`;
  readonly $typeArgs: [];
  readonly $isPhantom = SystemParametersV2.$isPhantom;

  readonly epochDurationMs: ToField<"u64">;
  readonly stakeSubsidyStartEpoch: ToField<"u64">;
  readonly minValidatorCount: ToField<"u64">;
  readonly maxValidatorCount: ToField<"u64">;
  readonly minValidatorJoiningStake: ToField<"u64">;
  readonly validatorLowStakeThreshold: ToField<"u64">;
  readonly validatorVeryLowStakeThreshold: ToField<"u64">;
  readonly validatorLowStakeGracePeriod: ToField<"u64">;
  readonly extraFields: ToField<Bag>;

  private constructor(typeArgs: [], fields: SystemParametersV2Fields) {
    this.$fullTypeName = composeSuiType(
      SystemParametersV2.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V21}::sui_system_state_inner::SystemParametersV2`;
    this.$typeArgs = typeArgs;

    this.epochDurationMs = fields.epochDurationMs;
    this.stakeSubsidyStartEpoch = fields.stakeSubsidyStartEpoch;
    this.minValidatorCount = fields.minValidatorCount;
    this.maxValidatorCount = fields.maxValidatorCount;
    this.minValidatorJoiningStake = fields.minValidatorJoiningStake;
    this.validatorLowStakeThreshold = fields.validatorLowStakeThreshold;
    this.validatorVeryLowStakeThreshold = fields.validatorVeryLowStakeThreshold;
    this.validatorLowStakeGracePeriod = fields.validatorLowStakeGracePeriod;
    this.extraFields = fields.extraFields;
  }

  static reified(): SystemParametersV2Reified {
    return {
      typeName: SystemParametersV2.$typeName,
      fullTypeName: composeSuiType(
        SystemParametersV2.$typeName,
        ...[],
      ) as `${typeof PKG_V21}::sui_system_state_inner::SystemParametersV2`,
      typeArgs: [] as [],
      isPhantom: SystemParametersV2.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => SystemParametersV2.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => SystemParametersV2.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => SystemParametersV2.fromBcs(data),
      bcs: SystemParametersV2.bcs,
      fromJSONField: (field: any) => SystemParametersV2.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => SystemParametersV2.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => SystemParametersV2.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => SystemParametersV2.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => SystemParametersV2.fetch(client, id),
      new: (fields: SystemParametersV2Fields) => {
        return new SystemParametersV2([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return SystemParametersV2.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<SystemParametersV2>> {
    return phantom(SystemParametersV2.reified());
  }
  static get p() {
    return SystemParametersV2.phantom();
  }

  static get bcs() {
    return bcs.struct("SystemParametersV2", {
      epoch_duration_ms: bcs.u64(),
      stake_subsidy_start_epoch: bcs.u64(),
      min_validator_count: bcs.u64(),
      max_validator_count: bcs.u64(),
      min_validator_joining_stake: bcs.u64(),
      validator_low_stake_threshold: bcs.u64(),
      validator_very_low_stake_threshold: bcs.u64(),
      validator_low_stake_grace_period: bcs.u64(),
      extra_fields: Bag.bcs,
    });
  }

  static fromFields(fields: Record<string, any>): SystemParametersV2 {
    return SystemParametersV2.reified().new({
      epochDurationMs: decodeFromFields("u64", fields.epoch_duration_ms),
      stakeSubsidyStartEpoch: decodeFromFields("u64", fields.stake_subsidy_start_epoch),
      minValidatorCount: decodeFromFields("u64", fields.min_validator_count),
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

  static fromFieldsWithTypes(item: FieldsWithTypes): SystemParametersV2 {
    if (!isSystemParametersV2(item.type)) {
      throw new Error("not a SystemParametersV2 type");
    }

    return SystemParametersV2.reified().new({
      epochDurationMs: decodeFromFieldsWithTypes("u64", item.fields.epoch_duration_ms),
      stakeSubsidyStartEpoch: decodeFromFieldsWithTypes(
        "u64",
        item.fields.stake_subsidy_start_epoch,
      ),
      minValidatorCount: decodeFromFieldsWithTypes("u64", item.fields.min_validator_count),
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

  static fromBcs(data: Uint8Array): SystemParametersV2 {
    return SystemParametersV2.fromFields(SystemParametersV2.bcs.parse(data));
  }

  toJSONField() {
    return {
      epochDurationMs: this.epochDurationMs.toString(),
      stakeSubsidyStartEpoch: this.stakeSubsidyStartEpoch.toString(),
      minValidatorCount: this.minValidatorCount.toString(),
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

  static fromJSONField(field: any): SystemParametersV2 {
    return SystemParametersV2.reified().new({
      epochDurationMs: decodeFromJSONField("u64", field.epochDurationMs),
      stakeSubsidyStartEpoch: decodeFromJSONField("u64", field.stakeSubsidyStartEpoch),
      minValidatorCount: decodeFromJSONField("u64", field.minValidatorCount),
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

  static fromJSON(json: Record<string, any>): SystemParametersV2 {
    if (json.$typeName !== SystemParametersV2.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return SystemParametersV2.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): SystemParametersV2 {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isSystemParametersV2(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a SystemParametersV2 object`);
    }
    return SystemParametersV2.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): SystemParametersV2 {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isSystemParametersV2(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a SystemParametersV2 object`);
      }

      return SystemParametersV2.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return SystemParametersV2.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<SystemParametersV2> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching SystemParametersV2 object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isSystemParametersV2(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a SystemParametersV2 object`);
    }

    return SystemParametersV2.fromSuiObjectData(res.data);
  }
}

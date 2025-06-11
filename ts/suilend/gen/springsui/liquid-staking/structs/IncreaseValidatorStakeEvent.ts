import { TypeName } from "../../../_dependencies/onchain/0x1/type-name/structs/index.js";
import { ID } from "../../../_dependencies/onchain/0x2/object/structs/index.js";
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
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../_framework/util.js";
import { PKG_V1 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isIncreaseValidatorStakeEvent(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::liquid_staking::IncreaseValidatorStakeEvent`;
}

export interface IncreaseValidatorStakeEventFields {
  typename: ToField<TypeName>;
  stakingPoolId: ToField<ID>;
  amount: ToField<"u64">;
}

export type IncreaseValidatorStakeEventReified = Reified<
  IncreaseValidatorStakeEvent,
  IncreaseValidatorStakeEventFields
>;

/**
 * Move struct: `IncreaseValidatorStakeEvent`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::liquid_staking`
 */
export class IncreaseValidatorStakeEvent implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::liquid_staking::IncreaseValidatorStakeEvent`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = IncreaseValidatorStakeEvent.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::liquid_staking::IncreaseValidatorStakeEvent`;
  readonly $typeArgs: [];
  readonly $isPhantom = IncreaseValidatorStakeEvent.$isPhantom;

  readonly typename: ToField<TypeName>;
  readonly stakingPoolId: ToField<ID>;
  readonly amount: ToField<"u64">;

  private constructor(typeArgs: [], fields: IncreaseValidatorStakeEventFields) {
    this.$fullTypeName = composeSuiType(
      IncreaseValidatorStakeEvent.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::liquid_staking::IncreaseValidatorStakeEvent`;
    this.$typeArgs = typeArgs;

    this.typename = fields.typename;
    this.stakingPoolId = fields.stakingPoolId;
    this.amount = fields.amount;
  }

  static reified(): IncreaseValidatorStakeEventReified {
    return {
      typeName: IncreaseValidatorStakeEvent.$typeName,
      fullTypeName: composeSuiType(
        IncreaseValidatorStakeEvent.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::liquid_staking::IncreaseValidatorStakeEvent`,
      typeArgs: [] as [],
      isPhantom: IncreaseValidatorStakeEvent.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        IncreaseValidatorStakeEvent.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        IncreaseValidatorStakeEvent.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => IncreaseValidatorStakeEvent.fromBcs(data),
      bcs: IncreaseValidatorStakeEvent.bcs,
      fromJSONField: (field: any) =>
        IncreaseValidatorStakeEvent.fromJSONField(field),
      fromJSON: (json: Record<string, any>) =>
        IncreaseValidatorStakeEvent.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        IncreaseValidatorStakeEvent.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        IncreaseValidatorStakeEvent.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        IncreaseValidatorStakeEvent.fetch(client, id),
      new: (fields: IncreaseValidatorStakeEventFields) => {
        return new IncreaseValidatorStakeEvent([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return IncreaseValidatorStakeEvent.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<IncreaseValidatorStakeEvent>> {
    return phantom(IncreaseValidatorStakeEvent.reified());
  }
  static get p() {
    return IncreaseValidatorStakeEvent.phantom();
  }

  static get bcs() {
    return bcs.struct("IncreaseValidatorStakeEvent", {
      typename: TypeName.bcs,
      staking_pool_id: ID.bcs,
      amount: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): IncreaseValidatorStakeEvent {
    return IncreaseValidatorStakeEvent.reified().new({
      typename: decodeFromFields(TypeName.reified(), fields.typename),
      stakingPoolId: decodeFromFields(ID.reified(), fields.staking_pool_id),
      amount: decodeFromFields("u64", fields.amount),
    });
  }

  static fromFieldsWithTypes(
    item: FieldsWithTypes,
  ): IncreaseValidatorStakeEvent {
    if (!isIncreaseValidatorStakeEvent(item.type)) {
      throw new Error("not a IncreaseValidatorStakeEvent type");
    }

    return IncreaseValidatorStakeEvent.reified().new({
      typename: decodeFromFieldsWithTypes(
        TypeName.reified(),
        item.fields.typename,
      ),
      stakingPoolId: decodeFromFieldsWithTypes(
        ID.reified(),
        item.fields.staking_pool_id,
      ),
      amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
    });
  }

  static fromBcs(data: Uint8Array): IncreaseValidatorStakeEvent {
    return IncreaseValidatorStakeEvent.fromFields(
      IncreaseValidatorStakeEvent.bcs.parse(data),
    );
  }

  toJSONField() {
    return {
      typename: this.typename.toJSONField(),
      stakingPoolId: this.stakingPoolId,
      amount: this.amount.toString(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): IncreaseValidatorStakeEvent {
    return IncreaseValidatorStakeEvent.reified().new({
      typename: decodeFromJSONField(TypeName.reified(), field.typename),
      stakingPoolId: decodeFromJSONField(ID.reified(), field.stakingPoolId),
      amount: decodeFromJSONField("u64", field.amount),
    });
  }

  static fromJSON(json: Record<string, any>): IncreaseValidatorStakeEvent {
    if (json.$typeName !== IncreaseValidatorStakeEvent.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return IncreaseValidatorStakeEvent.fromJSONField(json);
  }

  static fromSuiParsedData(
    content: SuiParsedData,
  ): IncreaseValidatorStakeEvent {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isIncreaseValidatorStakeEvent(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a IncreaseValidatorStakeEvent object`,
      );
    }
    return IncreaseValidatorStakeEvent.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): IncreaseValidatorStakeEvent {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isIncreaseValidatorStakeEvent(data.bcs.type)
      ) {
        throw new Error(
          `object at is not a IncreaseValidatorStakeEvent object`,
        );
      }

      return IncreaseValidatorStakeEvent.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return IncreaseValidatorStakeEvent.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(
    client: SuiClient,
    id: string,
  ): Promise<IncreaseValidatorStakeEvent> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching IncreaseValidatorStakeEvent object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isIncreaseValidatorStakeEvent(res.data.bcs.type)
    ) {
      throw new Error(
        `object at id ${id} is not a IncreaseValidatorStakeEvent object`,
      );
    }

    return IncreaseValidatorStakeEvent.fromSuiObjectData(res.data);
  }
}

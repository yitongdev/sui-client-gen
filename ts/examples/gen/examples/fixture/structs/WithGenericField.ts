import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeArgument,
  ToTypeStr,
  TypeArgument,
  assertFieldsWithTypesArgsMatch,
  assertReifiedTypeArgsMatch,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  extractType,
  fieldToJSON,
  phantom,
  toBcs,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../_framework/util.js";
import { UID } from "../../../sui/object/structs/index.js";
import { PKG_V1 } from "../../constants.js";
import { BcsType, bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isWithGenericField(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V1}::fixture::WithGenericField` + "<");
}

export interface WithGenericFieldFields<T extends TypeArgument> {
  id: ToField<UID>;
  genericField: ToField<T>;
}

export type WithGenericFieldReified<T extends TypeArgument> = Reified<
  WithGenericField<T>,
  WithGenericFieldFields<T>
>;

/**
 * Move struct: `WithGenericField`
 * Module: `8b699fdce543505aeb290ee1b6b5d20fcaa8e8b1a5fc137a8b3facdfa2902209::fixture`
 *
 * @typeParam T - Type parameter 0
 */
export class WithGenericField<T extends TypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::fixture::WithGenericField`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [false] as const;

  readonly $typeName = WithGenericField.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::fixture::WithGenericField<${ToTypeStr<T>}>`;
  readonly $typeArgs: [ToTypeStr<T>];
  readonly $isPhantom = WithGenericField.$isPhantom;

  readonly id: ToField<UID>;
  readonly genericField: ToField<T>;

  private constructor(
    typeArgs: [ToTypeStr<T>],
    fields: WithGenericFieldFields<T>,
  ) {
    this.$fullTypeName = composeSuiType(
      WithGenericField.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::fixture::WithGenericField<${ToTypeStr<T>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.genericField = fields.genericField;
  }

  static reified<T extends Reified<TypeArgument, any>>(
    T: T,
  ): WithGenericFieldReified<ToTypeArgument<T>> {
    return {
      typeName: WithGenericField.$typeName,
      fullTypeName: composeSuiType(
        WithGenericField.$typeName,
        ...[extractType(T)],
      ) as `${typeof PKG_V1}::fixture::WithGenericField<${ToTypeStr<ToTypeArgument<T>>}>`,
      typeArgs: [extractType(T)] as [ToTypeStr<ToTypeArgument<T>>],
      isPhantom: WithGenericField.$isPhantom,
      reifiedTypeArgs: [T],
      fromFields: (fields: Record<string, any>) =>
        WithGenericField.fromFields(T, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        WithGenericField.fromFieldsWithTypes(T, item),
      fromBcs: (data: Uint8Array) => WithGenericField.fromBcs(T, data),
      bcs: WithGenericField.bcs(toBcs(T)),
      fromJSONField: (field: any) => WithGenericField.fromJSONField(T, field),
      fromJSON: (json: Record<string, any>) =>
        WithGenericField.fromJSON(T, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        WithGenericField.fromSuiParsedData(T, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        WithGenericField.fromSuiObjectData(T, content),
      fetch: async (client: SuiClient, id: string) =>
        WithGenericField.fetch(client, T, id),
      new: (fields: WithGenericFieldFields<ToTypeArgument<T>>) => {
        return new WithGenericField([extractType(T)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return WithGenericField.reified;
  }

  static phantom<T extends Reified<TypeArgument, any>>(
    T: T,
  ): PhantomReified<ToTypeStr<WithGenericField<ToTypeArgument<T>>>> {
    return phantom(WithGenericField.reified(T));
  }
  static get p() {
    return WithGenericField.phantom;
  }

  static get bcs() {
    return <T extends BcsType<any>>(T: T) =>
      bcs.struct(`WithGenericField<${T.name}>`, {
        id: UID.bcs,
        generic_field: T,
      });
  }

  static fromFields<T extends Reified<TypeArgument, any>>(
    typeArg: T,
    fields: Record<string, any>,
  ): WithGenericField<ToTypeArgument<T>> {
    return WithGenericField.reified(typeArg).new({
      id: decodeFromFields(UID.reified(), fields.id),
      genericField: decodeFromFields(typeArg, fields.generic_field),
    });
  }

  static fromFieldsWithTypes<T extends Reified<TypeArgument, any>>(
    typeArg: T,
    item: FieldsWithTypes,
  ): WithGenericField<ToTypeArgument<T>> {
    if (!isWithGenericField(item.type)) {
      throw new Error("not a WithGenericField type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return WithGenericField.reified(typeArg).new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      genericField: decodeFromFieldsWithTypes(
        typeArg,
        item.fields.generic_field,
      ),
    });
  }

  static fromBcs<T extends Reified<TypeArgument, any>>(
    typeArg: T,
    data: Uint8Array,
  ): WithGenericField<ToTypeArgument<T>> {
    const typeArgs = [typeArg];

    return WithGenericField.fromFields(
      typeArg,
      WithGenericField.bcs(toBcs(typeArgs[0])).parse(data),
    );
  }

  toJSONField() {
    return {
      id: this.id,
      genericField: fieldToJSON<T>(this.$typeArgs[0], this.genericField),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField<T extends Reified<TypeArgument, any>>(
    typeArg: T,
    field: any,
  ): WithGenericField<ToTypeArgument<T>> {
    return WithGenericField.reified(typeArg).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      genericField: decodeFromJSONField(typeArg, field.genericField),
    });
  }

  static fromJSON<T extends Reified<TypeArgument, any>>(
    typeArg: T,
    json: Record<string, any>,
  ): WithGenericField<ToTypeArgument<T>> {
    if (json.$typeName !== WithGenericField.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(WithGenericField.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return WithGenericField.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T extends Reified<TypeArgument, any>>(
    typeArg: T,
    content: SuiParsedData,
  ): WithGenericField<ToTypeArgument<T>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isWithGenericField(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a WithGenericField object`,
      );
    }
    return WithGenericField.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T extends Reified<TypeArgument, any>>(
    typeArg: T,
    data: SuiObjectData,
  ): WithGenericField<ToTypeArgument<T>> {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isWithGenericField(data.bcs.type)
      ) {
        throw new Error(`object at is not a WithGenericField object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 1) {
        throw new Error(
          `type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`,
        );
      }
      const gotTypeArg = compressSuiType(gotTypeArgs[0]);
      const expectedTypeArg = compressSuiType(extractType(typeArg));
      if (gotTypeArg !== compressSuiType(extractType(typeArg))) {
        throw new Error(
          `type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`,
        );
      }

      return WithGenericField.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return WithGenericField.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T extends Reified<TypeArgument, any>>(
    client: SuiClient,
    typeArg: T,
    id: string,
  ): Promise<WithGenericField<ToTypeArgument<T>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching WithGenericField object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isWithGenericField(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a WithGenericField object`);
    }

    return WithGenericField.fromSuiObjectData(typeArg, res.data);
  }
}
